// src/components/InspectionButton.tsx
import { Button } from '@heroui/react'
import useScrollStore from '../store/scrollStore'

function InspectionButton() {
  const scrollToInspectionForm = useScrollStore(
    (state) => state.scrollToInspectionForm,
  )

  const handleButtonClick = () => {
    scrollToInspectionForm()
  }

  return (
    <Button
      onPress={handleButtonClick} // Use onPress for HeroUI Button
      className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600
                text-white font-semibold rounded-md shadow-md
                transition-transform duration-200 ease-in-out
                hover:scale-105 max-w-fit lg:text-xl"
    >
      {/*
        Keep the <a> tag for accessibility and fallback if JS fails.
        Its default instant jump is prevented by the onPress handler.
      */}
      Get A Free Inspection
    </Button>
  )
}

export default InspectionButton
