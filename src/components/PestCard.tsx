import { Image } from '@heroui/react'
import { Link } from '@tanstack/react-router'
interface PestCard {
  src: string
  alt: string
  link: string
  name: string
}

function PestCard({ src, alt, link, name }: PestCard) {
  return (
    <div className="w-4/5 flex flex-col justify-center items-center mb-2 m-auto">
      <Link to={link}>
        <Image
          src={src}
          alt={alt}
          className="object-cover"
          height={window.innerHeight * .3}
          width={window.innerWidth * .8}
        />
      </Link>
      <h3 className="text-xl font-bold text-center">{name}</h3>
    </div>
  )
}

export default PestCard
