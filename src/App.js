

import './App.css';
import Home from './Pages/HomePage';
import {Route,Routes} from 'react-router-dom'
import Details from './Pages/DetailsPage';


function App() {


  return (
    <div className="App">
      <h1>Warehouse List</h1>
      <Routes>
        <Route path='/' element={<Home  />}/>
        <Route path='/details/:id' element={<Details/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
