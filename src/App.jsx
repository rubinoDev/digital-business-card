import { About } from "./components/About"
import { Footer } from "./components/Footer"
import { Info } from "./components/Info"
import { Interests } from "./components/Interests"
import '../styles/styles.css'

function App() {

  return (
    <div className="App">
      <>
      <header>
        <Info/>
      </header>

      <main>
        <About/>
        <Interests/>
      </main>

      <footer>
        <Footer/>
      </footer>
      </>
    </div>
  )
}

export default App
