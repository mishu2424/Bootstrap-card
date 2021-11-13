
import './App.css';
import Main from './components/Main/Main';
import { BrowserRouter as Router,Switch,Route, NavLink } from 'react-router-dom';
import Home from './components/Home/Home'
import Notfound from './components/Notfound/Notfound';
import About from './components/About/About';
import Navlink from './components/Navlink/Navlink';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Culture from './components/Culture/Culture';
function App() {
  return (
    <div>
      <Main></Main>
      
   {/*    <Router>
        <Navlink></Navlink>
        <Switch>
          <Route path="/home">
           <Home></Home>
          </Route>
          <Route exact path="/"> */}
            {/* <Home></Home> */}
    {/*         <About></About>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route path="/friend/:friendId">
            <FriendDetail></FriendDetail>
          </Route>
          <Route path="/culture">
            <Culture></Culture>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
