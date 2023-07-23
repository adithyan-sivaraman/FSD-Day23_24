import { BrowserRouter,Routes,Route ,Navigate} from 'react-router-dom';
import './App.css';
import './style.css'
import Add from './Components/User/Add';
import Home from './Components/User/Home';
import Edit from './Components/User/Edit';
import View from './Components/Profile/View';
import EditProfile from './Components/Profile/Edit';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    
   <Header/>

    <Routes>
    <Route index path='/' element={<Dashboard/>}/>
    <Route path='user'>
    <Route path='list' element={<Home/>}/>
    <Route path='add' element={<Add/>}/>
    <Route path='edit' element={<Edit/>}/>
    
    
    </Route>
    <Route path='profile'>
    <Route path='view' element={<View/>}/>
    {<Route path='edit' element={<EditProfile/>}/>}
    </Route>
    <Route path='*' element={<Navigate to={'/'} replace/>}/>
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
