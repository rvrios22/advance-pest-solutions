import { createFileRoute, Link } from '@tanstack/react-router'
import { Card, CardBody, Image } from '@heroui/react'
import truck from '/truck.webp'
import truckSelfie from '/truckSelfie.webp'
import InspectionButton from '@/components/InspectionButton'
import pestLibrary from '../../public/pestLibrary'
import PestCard from '@/components/PestCard'
import InspectionForm from '@/components/InspectionForm'
export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const getUniquPests = (arr: any[], numberOfElements = 6) => {
    if (!arr || arr.length === 0) {
      return []
    }
    if (arr.length <= numberOfElements) {
      return [...arr]
    }
    const shuffled = [...arr]
    for (let i = 0; i < numberOfElements; i++) {
      const randomIdx = i + Math.floor(Math.random() * (shuffled.length - i))
      ;[shuffled[i], shuffled[randomIdx]] = [shuffled[randomIdx], shuffled[i]]
    }
    return shuffled.slice(0, numberOfElements)
  }

  return (
    <main>
      <div className="relative flex justify-center mx-auto max-w-[1200px]">
        <Image
          src={truck}
          alt="advance pest solutions truck"
          className="mt-4 object-cover border-1 border-gray-200"
          width={window.innerWidth}
        />
        <div className="absolute bottom-0 left-[2%] z-[10] flex flex-col gap-4 p-4">
          <h2 className="text-white text-xl font-bold font-outline text-pretty md:text-5xl">
            Your Coachella Valley solution to pests
          </h2>
          <InspectionButton />
        </div>
      </div>
      <h2 className="mt-4 mb-2 text-2xl text-center font-bold md:text-5xl">
        About Us
      </h2>
      <div className="lg:grid lg:grid-cols-2 lg:w-4/5 lg:m-auto lg:gap-4">
        {/* image container to center on screen */}
        <div className="w-4/5 mx-auto mb-2 flex justify-center lg:w-auto">
          <Image
            src={truckSelfie}
            className="border-1 border-gray-200 object-cover m-auto"
            width={window.innerWidth * 0.8}
            height={window.innerHeight * 0.5}
          />
        </div>
        <p
          className="w-4/5 m-auto font-medium lg:w-auto lg:mt-0 lg:text-lg lg:overflow-y-scroll"
          style={{
            height:
              window.innerWidth >= 1024 ? window.innerHeight * 0.5 : 'auto',
          }}
        >
          At Advance Pest Solutions in Indio, CA, we offer tailored protection
          for homes and businesses throughout the Coachella Valley. Known for
          expert insect control and rodent removal service in Indio CA, we
          tackle mice, rats, german roach, bedbugs and other invaders using
          proper solutions and exclusion methods to keep pests out for good.
          Whether you need a one-time fix or ongoing protection, our flexible
          plans—short-term and long-term pest control in Indio CA and all cities
          surrounding —are designed to match your schedule and budget with
          effective coverage. We specialize in safe insect control and rodent
          control in Indio CA. and all cities surrounding, applying
          industry-standard products with a focus on safety, thorough
          eradication, and prevention of future outbreaks Serving both homes and
          businesses, our comprehensive solutions for residential and commercial
          pest extermination in all cities of the Coachella Valley include
          inspections, treatment plans, and educational guidance to maintain
          pest-free properties year-round Facing an urgent infestation? Our
          same-day pest control services in the entire Coachella Valley CA
          ensure prompt, professional response to resolve issues fast and
          minimize disruption. Backed by 15 years of experience, Advance Pest
          Solutions combines expert techniques, reliable service, and
          neighborhood trust to deliver peace of mind and clean, safe
          environments.
        </p>
      </div>
      <h2 className="text-2xl w-4/5 mt-4 mx-auto text-center font-bold md:text-4xl">
        We offer a variety of services to suit{' '}
        <span className="text-2xl bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent md:text-4xl">
          YOUR
        </span>{' '}
        specific needs
      </h2>
      <p className="text-2xl w-4/5 m-auto text-center font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent md:text-3xl">
        One Time Services
      </p>
      <p className="text-2xl w-4/5 m-auto text-center font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent md:text-3xl">
        Reocurring
      </p>
      <p className="text-2xl w-4/5 m-auto text-center font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent md:text-3xl">
        Rodent & Bird Proofing
      </p>
      <p className="text-2xl w-4/5 m-auto text-center font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent md:text-3xl">
        Mosquito
      </p>
      <Card
        className="border-1 border-gray-200 w-4/5 mt-4 mx-auto text-center text-white font-outline "
        style={{
          backgroundImage:
            'linear-gradient(300deg, #2563eb, #fff, #dc2626 95%)',
        }}
      >
        <CardBody className="flex flex-col justify-center items-center gap-4 text-center text-pretty font-medium md:text-xl lg:text-2xl">
          We aim to give you the best service for your individual needs
          <InspectionButton />
        </CardBody>
      </Card>
      <h2 className="text-2xl text-center font-bold mt-4 mb-2 md:text-4xl">
        Pests We're{' '}
        <span className="text-2xl w-4/5 m-auto text-center font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent md:text-4xl">
          EXPERTS
        </span>{' '}
        At
      </h2>
      <div className="md: grid md:grid-cols-2 lg:grid-cols-3">
        {getUniquPests(pestLibrary).map(({ name, img, link }) => (
          <PestCard
            key={`${name}-${img}`}
            name={name}
            alt={name}
            src={img}
            link={link}
          />
        ))}
      </div>
      <Link className="text-center" to="/pests">
        <p className="text-center font-bold underline md:text-lg lg:text-xl">See More</p>
      </Link>
      <InspectionForm />
    </main>
  )
}
