import { Button } from '@heroui/react'

function InspectionButton() {
  return (
    <Button
      className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 
                text-white font-semibold rounded-md shadow-md 
                transition-transform duration-200 ease-in-out 
                hover:scale-105 max-w-fit"
    >
      Get A Free Inspection
    </Button>
  )
}

export default InspectionButton
