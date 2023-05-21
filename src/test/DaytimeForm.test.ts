import { render, screen, fireEvent, waitFor } from '@testing-library/vue'
import DaytimeForm from '@/components/DaytimeForm.vue'

const stubs = {
  DatePicker: {
    template: '<div></div>'
  }
}

const mockData = {
  dawn: '10:22:45 AM',
  day_length: '14:25:48',
  dusk: '1:49:26 AM',
  first_light: '9:03:25 AM',
  golden_hour: '12:40:36 AM',
  last_light: '3:08:47 AM',
  solar_noon: '6:06:06 PM',
  sunrise: '10:53:12 AM',
  sunset: '1:19:00 AM',
  timezone: 'CEST'
}

describe('DaytimeForm', () => {
  it('should show the submit button as disabled if the terms and conditions are not checked', () => {
    render(DaytimeForm, {
      global: {
        stubs
      }
    })
    const button = document.querySelector('#submit-button')
    expect(button.disabled).not.toBeNull()
  })

  it('should show the submit button as enabled if the terms and conditions are checked', async () => {
    render(DaytimeForm, {
      global: {
        stubs
      },
      props: {
        loading: false
      }
    })
    const checkbox = document.querySelector('input[type="checkbox"]')
    await fireEvent.change(checkbox)
    const button = document.querySelector('#submit-button')
    expect(button.disabled).toEqual(false)
    expect(checkbox.checked).toEqual(true)
  })

  it('should filter the results displayed when a filter has been applied by the user', async () => {
    render(DaytimeForm, {
      props: {
        data: mockData
      },
      global: {
        stubs
      }
    })
    const checkbox = document.querySelector('input[type="checkbox"]')
    await fireEvent.change(checkbox)
    await fireEvent.click(screen.getByRole('button', { name: /get results/i }))
    await fireEvent.click(screen.getByRole('button', { name: /filter type/i }))
    await fireEvent.click(screen.getByRole('button', { name: /sunset/i }))
    await waitFor(() => {
      expect(screen.getByText(/sunset:/i)).not.toBeNull()
      expect(screen.queryByText(/dusk:/i)).toBeNull()
    })
  })
})
