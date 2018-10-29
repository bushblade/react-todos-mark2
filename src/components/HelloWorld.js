import React from 'react'
import { Consumer } from '../context'

export default function HelloWorld() {
  return (
    <Consumer>
      {context => {
        console.log(context)
        return <h1>{context.test}</h1>
      }}
    </Consumer>
  )
}
