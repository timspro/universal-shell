import "App.css"
import React from "react"

function App() {
  const myNodeListOfBrs = document.querySelectorAll("br")
  myNodeListOfBrs.forEach((element) => {
    console.log(element)
  })
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
