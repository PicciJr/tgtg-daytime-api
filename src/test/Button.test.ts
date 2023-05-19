import { render, screen, fireEvent } from '@testing-library/vue'
import Button from '@/components/Button.vue'

describe('Button', () => {
  it('should render a button with the label provided to it', () => {
    const text = 'Get results'
    render(Button, {
      props: {
        text
      }
    })
    expect(screen.getByText(text)).toBeDefined()
  })

  it('should be disabled when it is showing a loading status', () => {
    render(Button, {
      props: {
        isLoading: true
      }
    })
    const button = document.querySelector('button')
    expect(button.disabled).toEqual(true)
  })

  it('should show a proper indicator when something is loading', () => {
    render(Button, {
      props: {
        isLoading: true
      }
    })
    const loadingIndicator = document.querySelector('svg')
    expect(loadingIndicator).not.toBeNull()
  })

  it('should fire a click event when the button is clicked', async () => {
    const { emitted } = render(Button)
    await fireEvent.click(screen.getByRole('button'))
    expect(emitted()).toHaveProperty('click')
  })
})
