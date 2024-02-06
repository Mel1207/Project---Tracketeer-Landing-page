import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Section1 from "./components/Section1"
import Section2 from "./components/Section2"

function App() {
  return (
    <>
      <Navigation />
      <main>
        <div className="container">
          <Header />
          <Section1 />
          <Section2 />
        </div>
      </main>
    </>
  )
}

export default App
