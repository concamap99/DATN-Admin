import React, { Component,Fragment } from "react";
import "./App.css";
import {
  BrowserRouter,
  Switch,
  Route,
  // Link,
  NavLink,
  Redirect,
  // useRouteMatch,
  // useParams
} from "react-router-dom";
import LoginForm from "./component/Login/Login_Form";
import Header from "./view/Home";
import Profile from "./view/Profile";
import Users from "./view/Users";
import QuestionsList from "./view/Question";
import Topic from "./view/Topic";
import Cookies from "js-cookie";
import LoginV from "./view/Login";
import HomePage from "./view/HomePage";
import "./css/appbar.css";
import "./css/login.scss";
import Logout from "./component/Login/Logout";
import ClassRoom from './view/ClassRoom'
import TestList from './view/Test'
import ForgotPassword from './view/ForgotPassword'
import ResetPW from './view/ResetPassword'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cookie: this.props.cookie,
      name: null
    };
  }
  render() {

    let token = Cookies.get("token");
    if (this.props.token == false) {
      token = Cookies.remove("token");
    }
    if (token != null) {
      return (
        <BrowserRouter>
          
          {/* <Route exact path="/*" render={() => <Redirect to="/admin" />} /> */}
          <Switch>
          {/* <Fragment> */}
            <Route exact path="/admin" >
              <div className="admin">
                <HomePage />
              </div>
            </Route>
            <Route exact path="/profile">
              <div className="profile">
                <Profile />
              </div>
            </Route>
            <Route exact path="/profile/notification">
              <div className="profile">
                <Profile view={3} />
              </div>
            </Route>
            <Route exact path="/profile/changepassword">
              <div className="profile">
                <Profile view={2} />
              </div>
            </Route>
            <Route exact path="/users">
              <div className="users">
                <Users />
              </div>
            </Route>
           
            <Route exact path="/questions">
              <div className="questions">
                <QuestionsList />
              </div>
            </Route>
            <Route exact path="/topic">
              <div className="topic">
                <Topic />
              </div>
            </Route>
            {/* <Route exact path="/changepassword">
              <div className="changepassword">
                <ChangePassword />
              </div>
            </Route> */}
            <Route exact path="/logout">
              <div className="logout">
                <Logout />
              </div>
            </Route>
            <Route exact path="/classroom">
              <div className="classroom">
                <ClassRoom />
              </div>
            </Route>
            <Route exact path="/testlist">
              <div className="classroom">
                <TestList />
              </div>
            </Route>
            <Route exact path="*" render={() => <Redirect to="/admin" />} />
            {/* <Route exact path="/forgotpassword" render={() => <Redirect to="/admin" />} /> */}
            {/* </Fragment> */}
          </Switch>
          
        </BrowserRouter>
      );
    } else {
      return (
        <BrowserRouter>
         <Switch>
        
         
          <Route exact path="/">
            <div className="Login">
              <LoginV />
            </div>
          </Route>
          <Route exact path="/forgotpassword">
            <div className="Login">
              <ForgotPassword />
            </div>
          </Route>
          <Route exact path="/reset">
            <div className="Login">
              <ResetPW />
            </div>
          </Route>
          <Route exact path="*" render={() => <Redirect to="/" />} />
          </Switch>
        </BrowserRouter>
      );
    }
  }
}
export default App;
