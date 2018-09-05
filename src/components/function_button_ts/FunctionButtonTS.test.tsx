import * as React from 'react'
import * as enzyme from 'enzyme'
import FunctionButtonTS from './FunctionButtonTS'

it('renders the button with the given text', () => {
  const button = enzyme.shallow(<FunctionButtonTS>Some text</FunctionButtonTS>)
  expect(button.find('button').text()).toEqual('Some text')
})
