import { BrowserRouter,Routes,Route ,Navigate} from 'react-router-dom';
import './App.css';
import './style.css'
import Edit from './Components/Edit';
import Home from './Components/Home';
import Add from './Components/Add';
import Delete from './Components/Delete';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    
   <Header/>

    <Routes>
    <Route index path='/' element={<Home/>}/>
    <Route path='user'>
    <Route path='add' element={<Add/>}/>
    <Route path='edit' element={<Edit/>}/>
    <Route path='delete' element={<Delete />}/>
    <Route path='*' element={<Navigate to={'/'} replace/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
