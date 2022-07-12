import React from 'react'

export const Hello: React.FunctionComponent<{ label: string }> = ({ label }) => {
  return <h1 className='hello-world'>{label}</h1>
}