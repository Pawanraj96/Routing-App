
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
    <div className="App">
     <div className='App-link'>
       <Link className='nav'to='/home'>Home</Link>
       <Link className='nav' to='/login'>Login</Link>
       <Link className='nav' to='/register'>Register</Link>

     </div>
     <div>
       <Route path='/home' component={Home} />
       <Route path='/login' component={Login} />
       <Route path='/register' component={Register} />
     </div>
    </div>
    </Router>
  );
}

export default App;
