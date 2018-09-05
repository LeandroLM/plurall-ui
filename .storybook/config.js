import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { setDefaults } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import { setOptions } from '@storybook/addon-options'

// Sets the info addon's options.
setDefaults({
  header: false,
})

setOptions({
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
  name: 'Plurall UI',
  url: 'https://gitlab.com/sdk12/plurall/plurall-ui',
})

const req = require.context('../src/components', true, /\.story\.(j|t)sx$/)
const withStoryStyles = storyFn => {
  return (
    <div
      style = {{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      { storyFn() }
    </div>
  )
}

const loadStories = () => {
  addDecorator(withKnobs)
  addDecorator(withStoryStyles)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
