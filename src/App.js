import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Showcase from './components/Showcase/Showcase';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <div style={{backgroundColor: '#fafafa'}}>
        <Header />
        <Hero />
        <Showcase />
        <About />
        <Footer />
      </div>

    </>
  );
}

export default App;
