import Home from './Components/Home'
import About from './Components/About/About'
import './App.css'
import Work from './Components/Work/Work'
import Testemonial from './Components/Testemonial/Testemonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  
  return (
    <div className='App'>
      <Home />
      <About />
      <Work />
      <Testemonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
