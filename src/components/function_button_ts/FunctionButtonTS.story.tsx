import { storiesOf } from '@storybook/react'
import * as React from 'react'

import FunctionButtonTS from './FunctionButtonTS'

storiesOf('Function Button in TypeScript', module)
  .add('Default', () => (
    <FunctionButtonTS>Function Button in TypeScript</FunctionButtonTS>
  ))
