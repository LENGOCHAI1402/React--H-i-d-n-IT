import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import AddNewProduct from './components/AddNewProduct';
 
function App() {

  const x = [1, 2, 3, 4, {name: 'hải'}];
  // const x = {name: 'eric'}
  console.log('value x =', x)
  return (
    <div className="App">
      <header className="App-header content-left">
        <div style={{textAlign: "center"}}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>
          Hello world React with Ngọc Hải x = {JSON.stringify(x)}
          {console.log('value x =', x)}
        </p>
        <Home/>
      </header>
      <div className='content-right'>
        <AddNewProduct/>
      </div>
    </div>
  );
}
 

export default App;
