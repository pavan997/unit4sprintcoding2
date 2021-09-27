import './App.css';
import {Route,Switch} from 'react-router';
import {Navbar} from './components/Navbar'
import {Routes} from './components/Routes'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
     
    </div>
  );
}

export default App;
