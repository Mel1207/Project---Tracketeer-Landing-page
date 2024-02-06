import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Section1 from "./components/Section1"
import Section2 from "./components/Section2"
import Section3 from "./components/Section3"

function App() {
  return (
    <>
      <Navigation />
      <main>
        <div className="container">
          <Header />
          <Section1 />
          <Section2 />
          <Section3 />
        </div>
      </main>
    </>
  )
}

export default App
