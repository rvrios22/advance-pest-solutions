import { Form, Button, Input, Textarea, addToast } from '@heroui/react'
import { Bug } from 'lucide-react'

function InspectionForm() {
  interface InspectionFormEvent extends React.FormEvent<HTMLFormElement> {}

  const handleSubmit = (e: InspectionFormEvent): void => {
    e.preventDefault()
    addToast({
      title: 'We receieved your message!',
      description: "We'll be in contact to schedule as soon as possible.",
      icon: <Bug />,
    })
  }
  return (
    <>
      <h2 className="mt-4 mb-2 text-2xl text-center font-bold md:text-4xl">
        Ready to Talk?
      </h2>
      <Form className="w-4/5 mx-auto lg:text-lg" onSubmit={handleSubmit} id='inspection-form'>
        <Input
          isRequired
          label="Name"
          labelPlacement="inside"
          isClearable
          type="text"
        />
        <Input
          isRequired
          label="Phone Number"
          labelPlacement="inside"
          isClearable
          type="tel"
        />
        <Input
          isRequired
          label="Email"
          labelPlacement="inside"
          isClearable
          type="email"
        />
        <Textarea
          isRequired
          label="How Can We Help?"
          labelPlacement="inside"
          description="Let us know what pest issues you have so we can assist you"
        />
        <Button
          type="submit"
          className="mb-4 mx-auto px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 
                text-white font-semibold rounded-md shadow-md 
                transition-transform duration-200 ease-in-out 
                hover:scale-105 max-w-fit lg:text-lg"
        >
          Submit
        </Button>
      </Form>
    </>
  )
}

export default InspectionForm
