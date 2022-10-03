import React from 'react'
import { Button, Form } from 'react-bootstrap'
import NavigationBar from './NavigationBar'

function ContactUs() {
  return (
    <div>
        <NavigationBar/>
       
       <div className='container mt-5'>
       <Form>
      
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter email" />
         
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
         
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" as="textarea" rows={3} placeholder="Description" />
      </Form.Group>
     
      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
       </div>
    </div>
  )
}

export default ContactUs