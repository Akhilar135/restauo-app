import logo from './logo.svg';
import './App.css';
import Navb from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carous from './carousel';


function App() {
  return (
    <div className="App">
      <div className='nav-cont'><Navb/></div>
      <header className="App-header">
        <Carous/>
        
      </header>
    </div>
  );
}

export default App;
