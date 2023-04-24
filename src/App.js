import Header from './Components/Header';
import Presente from './Components/Presente';
import Portfolio from './Components/Portfolio';
import Competent from './Components/Competent';
import Expert from './Components/Expert';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App container-fluid">
      <Header />
      <Presente />
      {/* < Portfolio /> */}
      < Competent />
      < Expert />
      < Contact />
    </div>
  );
}

export default App;
