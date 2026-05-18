import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/programs" element={<Home />} />
          <Route path="/volunteers" element={<Home />} />
          <Route path="/events" element={<Home />} />
          <Route path="/resources" element={<Home />} />
          <Route path="/feedback" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
