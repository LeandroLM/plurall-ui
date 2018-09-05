import * as React from 'react'
import * as enzyme from 'enzyme'
import FunctionButtonJS from './FunctionButtonJS'

it('renders the button with the given text', () => {
  const button = enzyme.shallow(<FunctionButtonJS>Some text</FunctionButtonJS>)
  expect(button.find('button').text()).toEqual('Some text')
})
