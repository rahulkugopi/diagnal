import React from 'react'

function ErrorFallBack({ error, resetErrorBoundary }: any) {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre style={{ color: "red" }}>{error.message}</pre>
            <button type='button' onClick={resetErrorBoundary}>Try again</button>
        </div>
    )
}

export default ErrorFallBack