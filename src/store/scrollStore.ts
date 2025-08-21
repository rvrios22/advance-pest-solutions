import React from 'react'
import { create } from 'zustand'

interface ScrollState {
  inspectionFormRef: React.RefObject<HTMLFormElement> | null
  setInspectionFormRef: (ref: React.RefObject<HTMLFormElement>) => void
  scrollToInspectionForm: () => void // Action to trigger scroll
}

const useScrollStore = create<ScrollState>((set, get) => ({
  inspectionFormRef: null,
  setInspectionFormRef: (ref) => set({ inspectionFormRef: ref }),
  scrollToInspectionForm: () => {
    const { inspectionFormRef } = get()
    if (inspectionFormRef?.current) {
      inspectionFormRef.current.scrollIntoView({
        behavior: 'smooth',
      })
    } else {
      console.warn('Inspection form ref not set, cannot scroll')
    }
  },
}))

export default useScrollStore