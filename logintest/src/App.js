import './App.css';
import { Login } from './Components/Pages/Login/Login';
import { Home } from './Components/Pages/Home/Home';
import { Register } from './Components/UI/Register/Register';
import { Header } from './Components/Layout/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/singup" component={Register}/>
        <Route exact path="/header" component={Header}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
