import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/home/Landing';
import store from './store';

import { HashRouter as Router , Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import './App.css';
import { Book } from './components/home/Book';

function App() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar/>
            <Route exact path="/" component={Landing}></Route>
            <Route exact path="/book/:id" component={Book}></Route>
            <Footer/>
          </div>
        </Router>
      </Provider>
    );
    
  }
 
  
export default App;
