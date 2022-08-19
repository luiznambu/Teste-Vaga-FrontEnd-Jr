import './styles/sass/App.sass';
import Header from './components/Header'
import Hero from './components/Hero'
import Categorias from './components/Categorias';
import Produtos from './components/Produtos';
import Marcas from './components/Marcas';
import Blog from './components/Blog';
import Instagram from './components/Instagram';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';


function App() {

  return (
    <div className="App">
      <Header />
      <Hero />
      <Categorias />
      <Produtos />
      <Marcas />
      <Blog />
      <Instagram />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
