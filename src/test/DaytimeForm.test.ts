import { render, screen, fireEvent } from '@testing-library/vue'
import DaytimeForm from '@/components/DaytimeForm.vue'

const stubs = {
  DatePicker: {
    template: '<div></div>'
  }
}

describe('DaytimeForm', () => {
  it('should show the submit button as disabled if the terms and conditions are not checked', () => {
    render(DaytimeForm, {
      global: {
        stubs
      }
    })
    const button = document.querySelector('button')
    expect(button?.disabled).not.toBeNull()
  })

  it('should show the submit button as enabled if the terms and conditions are checked', async () => {
    render(DaytimeForm, {
      global: {
        stubs
      }
    })
    const checkbox = document.querySelector('input[type="checkbox"]')
    await fireEvent.change(checkbox)
    const button = document.querySelector('button')
    expect(button?.disabled).toEqual(false)
    expect(checkbox.value).toEqual('true')
  })
})
