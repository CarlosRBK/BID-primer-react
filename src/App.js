import './App.css';
import PrimerComponente from './components/primerComponente';
import SegundoComponente from './components/SegundoComponente.jsx'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h1>Hello Dojo!</h1>
        <PrimerComponente />
        <SegundoComponente />

      </div>
    </div>
  );
}

export default App;
