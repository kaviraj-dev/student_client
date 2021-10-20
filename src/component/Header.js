import '../css/app.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Addstudent from '../view/Addstudent'
import Home from '../view/Home'
import Logout from '../view/Logout'

function Header() {
  return (
    <div className="web_app">
        <Router>
          <div className="nav">
            <Link to="/home">Home</Link>
            <Link to="/addstudent">Add Student</Link>
            <Link to="/logout">Logout</Link>
          </div>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/addstudent">
              <Addstudent />
            </Route>
            <Route path="/logout">
              <Logout />
            </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default Header;
