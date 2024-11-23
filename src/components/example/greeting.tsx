// greeting.tsx
import React from 'react'

// set the required props
type GreetingProps = {
  name: string,
  lastName: string,
}

// use props like a params
const Greeting: React.FC<GreetingProps> = ({ name, lastName }) => {
  return (
    <div>
      <p>{ `Hello, ${name} ${lastName}!` }</p>
    </div>
  )
}

export default Greeting