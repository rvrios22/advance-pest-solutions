import { createFileRoute } from '@tanstack/react-router'
import pestLibrary from '../../../public/pestLibrary'
import PestCard from '@/components/PestCard'
import InspectionForm from '@/components/InspectionForm'
export const Route = createFileRoute('/pests/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="min-h-screen">
      <h2 className="text-2xl text-center mb-4 font-bold mt-4 mb-2 md:text-4xl">
        Pests We're{' '}
        <span className="text-2xl w-4/5 m-auto text-center font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent md:text-4xl">
          EXPERTS
        </span>{' '}
        At
      </h2>
      <div className="md: grid md:grid-cols-2 lg:grid-cols-3">
        {pestLibrary.map((pest) => (
          <PestCard
            name={pest.name}
            alt={pest.name}
            src={pest.img}
            link={pest.link}
          />
        ))}
      </div>
      <InspectionForm />
    </main>
  )
}
