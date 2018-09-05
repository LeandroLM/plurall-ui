import { storiesOf } from '@storybook/react'
import * as React from 'react'

import FunctionButtonJS from './FunctionButtonJS'

storiesOf('Function Button in JavaScript', module)
  .add('Default', () => (
    <FunctionButtonJS>Function Button in JavaScript</FunctionButtonJS>
  ))
