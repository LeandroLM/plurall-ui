import * as React from 'react'

export interface IProps {
  children: React.ReactNode,
}

function FunctionButtonTS({ children }: IProps)  {
  return (
    <button>{children}</button>
  )
}

export default FunctionButtonTS
