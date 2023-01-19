import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import data from './data'
import Footer from './components/Footer'

function App() {


  const covers = data.map(cover => {
    return <Main
      key={cover.issue}
      image={cover.image}
      backgroundColor={cover.backgroundColor}
      issue={cover.issue}
      isSoldOut={cover.isSoldOut}
    />
  })


  return (
    <div className="App">
      <Navbar />
      {covers}
      <Footer />
    </div>
  )
}

export default App
