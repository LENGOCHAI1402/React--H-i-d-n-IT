import logo from './logo.svg';
import './App.scss';
import Home from './components/Home';
import AddNewProduct from './components/AddNewProduct';
import Product from './components/Products/Product';
import 'react-image-lightbox/style.css';
import Nav from './components/Navigation/Nav.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Router } from 'react-router-dom/cjs/react-router-dom.js';


function App() {

  const x = [1, 2, 3, 4, { name: 'hải' }];
  // const x = {name: 'eric'}
  console.log('value x =', x)
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/about">
          <Product />
        </Route>
        <Route path="/users">
          {/* <Users /> */}
        </Route>
        <Route path="/">
          <div className="App">
            <header className="App-header content-left">
              <div style={{ textAlign: "center" }}>
                <img src={logo} className="App-logo" alt="logo" />
              </div>
              <p>
                Hello world React with Ngọc Hải x = {JSON.stringify(x)}
                {console.log('value x =', x)}
              </p>
              <Home />
            </header>
            <div className='content-right'>
              <AddNewProduct />
              <hr />
              <Product />
            </div>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
