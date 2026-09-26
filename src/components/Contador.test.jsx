import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, test } from 'vitest'
import Contador from './Contador'

describe('Contador', () => {
  test('comienza en 0 y aumenta a 1 al hacer clic', async () => {
    const user = userEvent.setup()

    render(<Contador />)

    expect(
      screen.getByText('Valor: 0')
    ).toBeInTheDocument()

    await user.click(
      screen.getByRole('button', { name: 'Incrementar' })
    )

    expect(
      screen.getByText('Valor: 1')
    ).toBeInTheDocument()
  })
})
