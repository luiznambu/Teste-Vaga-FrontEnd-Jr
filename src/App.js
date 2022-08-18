import './styles/sass/App.sass';
import Header from './components/Header'
import Hero from './components/Hero'
import Categorias from './components/Categorias';
import Produtos from './components/Produtos';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Categorias />
      <Produtos />
    </div>
  );
}

export default App;
