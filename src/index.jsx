import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { ThemeProvider } from "styled-components"
import defaultTheme from "./styles/theme"

const node = document.getElementById("app")

const root = ReactDOM.createRoot(node)

root.render(
  <ThemeProvider theme={defaultTheme}>
    <App />
  </ThemeProvider>
)
