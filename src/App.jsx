import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />

      {/* Your page content goes here */}
      <main style={{ minHeight: '60vh', padding: '48px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ color: '#111827', fontFamily: "'Inter', sans-serif" }}>Welcome to ADORE</h1>
        <p style={{ color: '#6b7280', fontFamily: "'Inter', sans-serif" }}>
          Empowering youth through education, awareness, and community service.
        </p>
      </main>

      <Footer />
    </>
  );
}

export default App;
