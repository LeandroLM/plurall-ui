import * as React from 'react'
import * as enzyme from 'enzyme'
import ClassButtonTS from './ClassButtonTS'

it('renders the button with the is given text and state', () => {
  const button = enzyme.shallow(<ClassButtonTS>Some text</ClassButtonTS>)
  expect(button.find('button').text()).toEqual('Some text in TypeScript')
})
