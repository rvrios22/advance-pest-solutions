import { Image } from '@heroui/react'
import { createFileRoute, useLoaderData } from '@tanstack/react-router'
import pestLibrary from '../../../public/pestLibrary'
import InspectionForm from '@/components/InspectionForm'

const findPest = (pest: string) => {
  return pestLibrary.find((p) => p.link.split('/')[2] === pest)
}

export const Route = createFileRoute('/pests/$pestName')({
  component: RouteComponent,
  loader: ({ params }) => {
    return findPest(params.pestName)
  },
})

function RouteComponent() {
  const loaderData = useLoaderData({ from: '/pests/$pestName' })
  return (
    <main className="min-h-screen">
      <div className="flex justify-center m-auto">
        <Image
          className={`object-cover border-1 border-gray-200 ${loaderData?.name.toLowerCase() === 'ants' ? 'object-top' : loaderData?.name.toLowerCase() === 'scorpions' ? 'object-bottom' : ''}`}
          src={loaderData?.img}
          width={window.innerWidth * 0.8}
          height={
            window.innerWidth >= 768
              ? window.innerHeight * 0.6
              : window.innerHeight * 0.4
          }
        />
      </div>
      <h1 className="mt-4 mb-2 text-2xl text-center font-bold md:text-3xl lg:text-5xl">
        {loaderData?.name}
      </h1>
      <p className="w-4/5 mx-auto text-base lg:text-xl">{loaderData?.desc}</p>
      <h2 className="mt-4 mb-2 text-2xl text-center font-bold md:text-3xl lg:text-5xl">
        Control
      </h2>
      <p className="w-4/5 mx-auto text-base lg:text-xl">
        {loaderData?.control}
      </p>
      <InspectionForm />
    </main>
  )
}
