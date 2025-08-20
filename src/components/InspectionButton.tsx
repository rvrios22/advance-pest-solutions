import { Button } from '@heroui/react'
import { Link } from '@tanstack/react-router'

function InspectionButton() {
  return (
    <Button
      className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 
                text-white font-semibold rounded-md shadow-md 
                transition-transform duration-200 ease-in-out 
                hover:scale-105 max-w-fit lg:text-xl"
    >
      <a href="#inspection-form">Get A Free Inspection</a>
    </Button>
  )
}

export default InspectionButton
