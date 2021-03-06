import React from "react"
import ReactDOM from "react-dom"
import App from "App"
import { BrowserRouter as Router } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query"
import Auth0ProviderWithHistory from "components/util/Auth0ProviderWithHistory"

import "./index.css"

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry)
      getFID(onPerfEntry)
      getFCP(onPerfEntry)
      getLCP(onPerfEntry)
      getTTFB(onPerfEntry)
    })
  }
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Auth0ProviderWithHistory>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Auth0ProviderWithHistory>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)

reportWebVitals()
