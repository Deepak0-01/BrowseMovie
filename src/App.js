
import './App.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import {BrowserRouter as Router , Switch , Link , Route} from 'react-router-dom';
import Movie from './components/Movie';


function App() {
  return (
    <div className="App">

    <Router>

    <Header/>

    <Switch>

    <Route exact path ="/">

   
    <Homepage/>
    
    </Route>

    <Route path="/movie/:id">

    <Movie/>
    </Route>
    
    
    </Switch>
    
    </Router>

  
    </div>
  );
}

export default App;
