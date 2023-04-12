import React from "react"
import Header from "./layout/Header"
import Button from "./components/Button"
import Button2 from "./components/Button2"

export default function App() {
  return (
    <div>
      <Header />
      <h1>Some text</h1>
      <Button text="Test Text" variant="primary" />
      <Button text="SeE PrODuCTo" variant="secondary" />
      <Button text="shop" withArrow />
      <Button2 text="nuevo botón" variant="secondary" withArrow />
    </div>
  )
}
