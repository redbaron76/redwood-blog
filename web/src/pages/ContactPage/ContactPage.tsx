import { css } from 'styled-system/css'

import { Form, TextField } from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

const ContactPage = () => {
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Form className={css({ p: 4 })}>
        <TextField
          name="name"
          placeholder="Your name"
          className={css({
            p: 2,
            borderWidth: 1,
            borderColor: 'gray.400',
            rounded: 'md',
          })}
        />
      </Form>
    </>
  )
}

export default ContactPage
