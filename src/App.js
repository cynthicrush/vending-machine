import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Water from './Water'
import Chips from './Chips'
import Gummy from './Gummy'

import { BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/water'>
            <Water />
          </Route>
          <Route exact path='/chips'>
            <Chips />
          </Route>
          <Route exact path='/gummy'>
            <Gummy />
          </Route>
        </Switch>  
      </BrowserRouter>
    </div>
  );
}

export default App;
