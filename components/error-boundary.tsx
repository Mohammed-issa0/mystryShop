"use client"

import type React from "react"

import { Component, type ReactNode } from "react"

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // You can log the error to an error reporting service here
    console.error("Error caught by ErrorBoundary:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        this.props.fallback || (
          <div className="p-6 bg-red-50 rounded-lg border border-red-200 text-center">
            <h2 className="text-xl font-bold text-red-800 mb-2">حدث خطأ ما</h2>
            <p className="text-red-600 mb-4">نعتذر عن هذا الخطأ، يرجى تحديث الصفحة أو المحاولة لاحقاً.</p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              حاول مرة أخرى
            </button>
          </div>
        )
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
