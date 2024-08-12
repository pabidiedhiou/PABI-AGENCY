import Footer from './Footer'
import { fireEvent, render, screen } from '@testing-library/react'
import { MonProviderDeTheme } from '../../Utils/Context/Context'

test('Change theme', async () => {
  render(
    <MonProviderDeTheme>
      <Footer />
    </MonProviderDeTheme>,
  )
  const nightModeButton = screen.getByRole('button')
  expect(nightModeButton.textContent).toBe('Changer de mode: ☀️')

  fireEvent.click(nightModeButton)
  expect(nightModeButton.textContent).toBe('Changer de mode: 🌙')
})
