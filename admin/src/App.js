import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./style/dark.scss";
import Login from './pages/login/Login';
import List from './pages/list/List';
import New from './pages/new/New';
import Home from './pages/home/Home';
import NewHotel from './pages/newHotel/NewHotel';
import Single  from './pages/single/Single'
import NewRoom from './pages/newRoom /NewRoom';

function App() {
  return (
    <div className={' app '}>
    <BrowserRouter>
<Routes>
   <Route path="/">
    <Route path='/Login' element={<Login/>} />
    <Route  
    path='/Home'
    element={
        <Home />
    }/>
    <Route path='List' element={<List/>}/>
    <Route path='New' element={<New/>}/>
    <Route path='newHotel' element={<newHotel/>}/>
    <Route path='Single' element={<Single/>}/>
    <Route path='NewRoom' element={<NewRoom/>}/> 
    <Route path='NewHotel' element={<NewHotel/>}/> 
   </Route>

</Routes>
</BrowserRouter>
</div>
  )
}
export default App


