import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import NavBar from "./components/views/NavBar/NavBar";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";
import NavBar from "./components/views/NavBar/NavBar";
import SignUp from "./components/views/RegisterPage/Register";
import About from "./components/views/AboutPage/About";
import UsEarth from "./components/views/UsEarthPage/UsEarth";

function App() {
    return (
        <Router>
            <NavBar />
            <div>
                <Switch>
                    <Route exact path="/" component={Auth(LandingPage, null)} />
                    <Route
                        exact
                        path="/login"
                        component={Auth(LoginPage, false)}
                    />
                    <Route
                        exact
                        path="/register"
                        component={Auth(RegisterPage, false)}
                    />
                    <Route exact path="/about" component={Auth(About, null)} />

                    {/* usEarth 페이지 추후 null -> true로 변경 */}
                    <Route
                        exact
                        path="/usEarth"
                        component={Auth(UsEarth, null)}
                    />
                    <Route exact path="/shop" component={Auth(About, null)} />
                    <Route exact path="/board" component={Auth(About, null)} />

                    {/* 추후 삭제 */}
                    <Route exact path="/signup" component={SignUp} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
