import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Hello } from './Hello'

describe('Test Jest', () => {
  it('should render component without errors', () => {
    const { container } = render(<Hello label='hello' />)
    expect(container.querySelector('.hello-world')).toBeInTheDocument()
  })
})