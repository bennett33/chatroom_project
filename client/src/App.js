import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Register from './views/Register';
import DisplayUsers from './views/DisplayUsers';
import Login from './views/Login';
import Cookie from './views/Cookie';
import Chat from './views/Chat';
import Chat2 from './views/Chat2';
import Chat3 from './views/Chat3';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/users">
            <DisplayUsers />
          </Route>       
          <Route exact path="/">
            <Cookie />
          </Route>
          <Route exact path="/chat">
            <Chat />
          </Route>  
          <Route exact path="/chat2">
            <Chat2 />
          </Route>
          <Route exact path="/chat3">
            <Chat3 />
          </Route> 
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;