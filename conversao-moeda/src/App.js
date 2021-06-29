import './App.css';
import Pesquisa from './Pesquisa'

export default function App() {
  return (
    <div className="App">
      <Pesquisa moedaA="USD" cor="#99ccff" />
      <Pesquisa moedaA="EUR" cor="#ccff99" />
      <Pesquisa moedaA="CAD" cor="#9933ff" />
    </div>
  )
}

