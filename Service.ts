import { z } from 'zod'
import { err } from './Error Message/Error'

const str = z.coerce.string().min(5, {message: err.POOS301})
export const currentString = str.safeParse('hel')

if(currentString.success)
  console.log(currentString.data)
else
  console.log(currentString.error.errors[0].message)