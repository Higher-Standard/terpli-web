
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages'
import SigninPage from './pages/signin'
import Research from './pages/Research'



function App() {
  return (
    <Router >
      <Switch>
        <Route path="/" component ={Home} exact />
        <Route path="/signin" component = {SigninPage} exact />
        <Route path="/research" component = {Research} exact />
      </Switch>

    </Router>
  );
}

export default App;
