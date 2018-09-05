import { storiesOf } from '@storybook/react'
import * as React from 'react'

import ClassButtonTS from './ClassButtonTS'

storiesOf('Class Button in TypeScript', module)
  .add('Default', () => (
    <ClassButtonTS>Class Button</ClassButtonTS>
  ))
