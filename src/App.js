//Imports..
import Navbar from './NavBar'   //Imports the Navigation Bar for the website.
import Home from './Home'       //Imports the blogs for the homepage.
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' //Imports React Router.
import Create from './create'   //Imports the blog creation system.
import Footer from './footer'   //Imports the footer for the site.
import BlogDetails from './BlogDetails'
import NotFound from './404NotFound'

const App = () => {
    return (
        <Router>
        <div className='App'>
            <Navbar />      {/*Calling the Navigation Bar. */}
            <div className = 'content'>
                <Switch>
                    <Route exact path='/'>
                        <Home />    {/* Rendering the blogs on the website. */}
                    </Route>
                    <Route exact path='/create'>
                        <Create />
                    </Route>
                    <Route exact path='/blogs/:id'>
                        <BlogDetails />
                    </Route>
                    <Route path = '*'> {/* If the webpage loaded is unknown, it shows a 404 page. */}
                        <NotFound />
                    </Route>
                </Switch>
                </div>
            <Footer />      {/* Rendering the footer.*/}
        </div>
        </Router>
    );
}

//Exporting App()
export default App