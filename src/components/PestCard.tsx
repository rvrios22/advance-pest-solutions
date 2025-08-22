import { Card, CardBody, Image } from '@heroui/react'
import { Link } from '@tanstack/react-router'
interface PestCard {
  src: string
  alt: string
  link: string
  name: string
}

function PestCard({ src, alt, link, name }: PestCard) {
  return (
    <div className="w-4/5 flex flex-col justify-center items-center mb-2 m-auto ">
      <Card className="hover:scale-103 hover:opacity-80 border-1 border-gray-200">
        <Link to={link}>
          <CardBody className="p-0 ">
            <Image
              src={src}
              alt={`Picture of a ${alt} species`}
              className="object-cover"
              height={window.innerHeight * 0.3}
              width={window.innerWidth * 0.8}
            />
            <h3 className="text-xl font-bold text-center">{name}</h3>
          </CardBody>
        </Link>
      </Card>
    </div>
  )
}

export default PestCard
