import { createFileRoute } from '@tanstack/react-router'
import { Image } from '@heroui/react'
import truck from '../../public/truck.webp'
import truckSelfie from '../../public/truckSelfie.webp'
import InspectionButton from '@/components/InspectionButton'
export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <>
      <div className="relative">
        <Image
          src={truck}
          alt="advance pest solutions truck"
          className="border-1 border-[#e0e0e0] mt-4"
        />
        <div className="absolute bottom-0 z-[10] flex flex-col gap-4 p-4">
          <h2 className="text-white text-xl font-bold font-outline text-pretty md:text-6xl">
            Your Coachella Valley solution to pests
          </h2>
          <InspectionButton />
        </div>
      </div>
      <h2 className="text-white font-outline text-2xl text-center font-bold md:text-6xl">
        About Us
      </h2>
      {/* image container to center on screen */}
      <div className="w-full flex justify-center">
        <Image
          src={truckSelfie}
          className="w-4/5 h-[50dvh] border-1 object-cover m-auto"
        />
      </div>
      <p className="w-4/5 m-auto font-medium">
        At Advance Pest Solutions in Indio, CA, we offer tailored protection for
        homes and businesses throughout the Coachella Valley. Known for expert
        insect control and rodent removal service in Indio CA, we tackle mice,
        rats, german roach, bedbugs and other invaders using proper solutions
        and exclusion methods to keep pests out for good. Whether you need a
        one-time fix or ongoing protection, our flexible plans—short-term and
        long-term pest control in Indio CA and all cities surrounding —are
        designed to match your schedule and budget with effective coverage. We
        specialize in safe insect control and rodent control in Indio Ca. and
        all cities surrounding, applying industry-standard products with a focus
        on safety, thorough eradication, and prevention of future outbreaks
        Serving both homes and businesses, our comprehensive solutions for
        residential and commercial pest extermination in all cities of the
        Coachella Valley include inspections, treatment plans, and educational
        guidance to maintain pest-free properties year-round Facing an urgent
        infestation? Our same-day pest control services in the entire Coachella
        Valley CA ensure prompt, professional response to resolve issues fast
        and minimize disruption. Backed by 15 years of experience, Advance Pest
        Solutions combines expert techniques, reliable service, and neighborhood
        trust to deliver peace of mind and clean, safe environments.
      </p>
      <h2 className="text-2xl w-4/5 m-auto text-center font-bold">
        We offer a vaeriety of services to suit{' '}
        <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
          YOUR
        </span>{' '}
        specific needs
      </h2>
      <p className="text-2xl w-4/5 m-auto text-center font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
        One Time Services
      </p>
      <p className="text-2xl w-4/5 m-auto text-center font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
        Reocurring
      </p>
      <p className="text-2xl w-4/5 m-auto text-center font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
        Rodent & Bird Proofing
      </p>
      <p className="text-2xl w-4/5 m-auto text-center font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
        Mosquito
      </p>
    </>
  )
}
