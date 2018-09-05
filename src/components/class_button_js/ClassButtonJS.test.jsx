import * as React from 'react'
import * as enzyme from 'enzyme'
import ClassButtonJS from './ClassButtonJS'

it('renders the button with the is given text and state', () => {
  const button = enzyme.shallow(<ClassButtonJS>Some text</ClassButtonJS>)
  expect(button.find('button').text()).toEqual('Some text in JavaScript')
})
