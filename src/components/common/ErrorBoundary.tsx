import React, { Component, ReactNode } from 'react'
import ErrorPage from '../../pages/_error'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  // public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
  //   // You can also log the error to an error reporting service
  //   console.error('Uncaught error:', error, errorInfo)
  // }

  public render() {
    if (this.state.hasError) {
      return <ErrorPage />
    }

    return this.props.children
  }
}

export default ErrorBoundary
