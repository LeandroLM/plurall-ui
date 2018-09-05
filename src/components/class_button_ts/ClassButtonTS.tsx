import * as React from 'react'

interface IProps {
  children: React.ReactNode,
}

interface IState {
  language: string,
}

class ClassButtonTS extends React.Component<IProps, IState> {
  public state = {
    language: 'TypeScript'
  }

  public render() {
    return (
      <button>{this.props.children} in {this.state.language}</button>
    )
  }
}

export default ClassButtonTS
