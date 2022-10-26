import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { count as counter, Lib, chain } from "react-libs-template"

function App() {
    const [count, setCount] = useState(0)
    const [message, setMessage] = useState("")

    useEffect(() => {
        counter(500).then(() => {
            setMessage(chain)
        })
    }, [])

    return (
        <div className="App">
            <h1>Message: {message}</h1>

            <Lib />
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )
}

export default App
