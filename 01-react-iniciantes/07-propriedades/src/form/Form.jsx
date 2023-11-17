import React from 'react'
import Button from './Button'
import Input from './Input'

const Form = () => {
  return (
    <form>
      <Input id='email' label='email' type='text' required />
      <Input id='senha' label='senha' type='password' />
      <Button />
    </form>
  )
}

export default Form
