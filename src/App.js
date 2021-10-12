import Navigation from './Nav/Navigation'
import Home from './Home/Home'
import Footer from './Footer/Footer'
import FAQ from './FAQ/FAQ'
import Contact from './Contact/Contact'
import Register from './Register/Register'
import Error from './Error/Error'
import Dashboard from './Dashboard/Dashboard'

import { Route, Switch } from 'react-router-dom';

import { UserProvider } from './UserContext'


function App() {
  return (
    <div className="App">
      <UserProvider>
      <Navigation />
      <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/faq" component={FAQ} />
      <Route path="/contact" component={Contact} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} />
      <Route component={Error} />
      </Switch>
      <Footer /> 
      </UserProvider>
      

    </div>
  );
}

export default App;

