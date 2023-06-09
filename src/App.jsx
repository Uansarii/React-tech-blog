
// import all the components to be routed
import Login from './webpages/login';
import Footer from './Components/Footer';
import Register from './webpages/register';
import Home from './webpages/Home';
import Landing from './webpages/Landing';
import Singleblog from "./webpages/Singleblog";
import ContributeBlog from "./webpages/ContributeBlog";
import Contact from "./webpages/contact";

//import Router for routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import AllPosts from './webpages/allPosts';

// run the json server using : npx json-server --watch data/db.json 8000

function App() {
  //if the user is logged in, directed to desired page.
  //else the user is redirected back to the landing page
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return (
    <Router>
      <div >

        <Switch>
          <Route exact path='/'>
            <Landing />
          </Route>
          <Route exact path='/contact'
            render={() =>
              isLoggedIn ? <Contact /> : <Redirect to="/" />
            }
          />
        </Switch>
        <Switch>
          <Route exact path='/home'
            render={() =>
              isLoggedIn ? <Home /> : <Redirect to="/" />
            }

          />
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route>
          <Route exact path='/post/:id' render={() =>
            isLoggedIn ? <Singleblog /> : <Redirect to="/" />
          }

          />

          <Route path="/contribute" render={() =>
            isLoggedIn ? <ContributeBlog /> : <Redirect to="/" />
          }

          />
          <Route path='/allposts' render={() =>
            isLoggedIn ? <AllPosts /> : <Redirect to="/" />
          }

          />

        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App