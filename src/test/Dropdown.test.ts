import { render, screen, fireEvent } from '@testing-library/vue'
import Dropdown from '@/components/Dropdown.vue'

const items: string[] = ['item 1', 'item 2']

describe('Dropdown', () => {
  it('should render a dropdown button with the label provided to it', () => {
    const buttonText = 'Show options'
    render(Dropdown, {
      props: {
        buttonText
      }
    })
    expect(screen.getByText(buttonText)).toBeDefined()
  })

  it('should render a dropdown button with its items hidden initially', () => {
    render(Dropdown, {
      props: {
        items
      }
    })
    expect(screen.queryByRole('list')).toBeNull()
  })

  it('should display the dropdown items when the dropdown is clicked', async () => {
    render(Dropdown, {
      props: {
        items
      }
    })
    await fireEvent.click(screen.getByRole('button'))
    expect(screen.queryByRole('list')).not.toBeNull()
  })
})
