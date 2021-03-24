import React from 'react'
import Form from './Form.js';

import {
  Container

} from './ContactElements.js';

const Contact = () => {
    return (
        <>
        <div id="content-contact">
      <Container id="contact">
        <Form type='investor'></Form>
      </Container>
      </div>
    </>
    )
}

export default Contact
