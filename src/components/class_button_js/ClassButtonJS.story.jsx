import { storiesOf } from '@storybook/react'
import * as React from 'react'

import ClassButtonJS from './ClassButtonJS'

storiesOf('Class Button in JavaScript', module)
  .add('Default', () => (
    <ClassButtonJS>Class Button</ClassButtonJS>
  ))
