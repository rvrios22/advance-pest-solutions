// src/components/InspectionForm.tsx
import React, { useEffect, useState, useRef } from 'react' // Add useEffect
import { Form, Button, Input, Textarea, addToast } from '@heroui/react'
import { Bug } from 'lucide-react'
import useScrollStore from '../store/scrollStore' // Import your store
import { useForm } from '@formspree/react'

const InspectionForm = React.forwardRef<HTMLFormElement, {}>(() => {
  const [state, handleSubmit] = useForm('xanbrnro')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    desc: '',
  })
  const formRef = useRef<HTMLFormElement>(null)
  const setInspectionFormRef = useScrollStore(
    (state) => state.setInspectionFormRef,
  )

  useEffect(() => {
    if (formRef.current) {
      //@ts-ignore
      setInspectionFormRef(formRef)
    }
  }, [setInspectionFormRef])

  interface InspectionFormEvent extends React.FormEvent<HTMLFormElement> {}

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    if (state.succeeded) {
      addToast({
        title: 'We receieved your message!',
        description: "We'll be in contact to schedule as soon as possible.",
        icon: <Bug />,
      })
      setFormData({
        name: '',
        phone: '',
        email: '',
        desc: '',
      })
    }

    if (state.errors) {
      addToast({
        title: 'Sorry, something went wrong',
        description:
          'Please try again or contact us via Facebook or Instagrame while we figure out our bugs.',
        icon: <Bug />,
      })
    }
  }, [state.succeeded, state.errors])
  return (
    <Form
      className="w-4/5 mx-auto lg:text-lg"
      onSubmit={handleSubmit}
      action="https://formspree.io/f/xanbrnro"
      method="post"
      id="inspection-form"
      ref={formRef}
    >
      <Input
        isRequired
        onChange={handleChange}
        value={formData.name}
        name="name"
        label="Name"
        labelPlacement="inside"
        isClearable
        type="text"
      />
      <Input
        isRequired
        onChange={handleChange}
        value={formData.phone}
        name="phone"
        label="Phone Number"
        labelPlacement="inside"
        isClearable
        type="tel"
      />
      <Input
        isRequired
        onChange={handleChange}
        value={formData.email}
        name="email"
        label="Email"
        labelPlacement="inside"
        isClearable
        type="email"
      />
      <Textarea
        isRequired
        onChange={handleChange}
        value={formData.desc}
        name="desc"
        label="How Can We Help?"
        labelPlacement="inside"
        description="Let us know what pest issues you have so we can assist you"
      />
      <Button
        isLoading={state.submitting}
        disabled={state.submitting}
        type="submit"
        className="mb-4 mx-auto px-6 py-3 bg-gradient-to-r from-red-500 to-red-600
                text-white font-semibold rounded-md shadow-md
                transition-transform duration-200 ease-in-out
                hover:scale-105 max-w-fit lg:text-lg"
      >
        Submit
      </Button>
    </Form>
  )
})

InspectionForm.displayName = 'InspectionForm'

export default InspectionForm
