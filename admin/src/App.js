import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate

} from "react-router-dom";
import "./style/dark.scss";
import Login from './pages/login/Login';
import List from './pages/list/List';
import New from './pages/new/New';
import Home from './pages/home/Home';
import NewHotel from './pages/newHotel/NewHotel';
import Single  from './pages/single/Single'
import NewRoom from './pages/newRoom /NewRoom';
import {userInputs} from './formSource'
import { userColumns ,hotelColumns ,roomColumns} from './datatablesource';
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';


function App() {
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/" />;
    }

    return children;
  };
  return (
    <div className={ "app"}>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/" element={<Login />} />
          <Route
            index
            path='/Home'
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="users">
  <Route
    index
    element={
      <ProtectedRoute>
        <List columns={userColumns} />
      </ProtectedRoute>
    }
  />
  <Route
    path="user" // Change this line to remove the leading slash
    element={
      <ProtectedRoute>
        <Single />
      </ProtectedRoute>
    }
  />
  <Route
    path="new"
    element={
      <ProtectedRoute>
        <New inputs={userInputs} title="Add New User" />
      </ProtectedRoute>
    }
  />
</Route>

          <Route path="hotels">
            <Route
              index
              element={
                <ProtectedRoute>
                  <List columns={hotelColumns}/>
                </ProtectedRoute>
              }
            />
            <Route
              path=":productId"
              element={
                <ProtectedRoute>
                  <Single />
                </ProtectedRoute>
              }
            />
            <Route
              path="new"
              element={
                <ProtectedRoute>
                  <NewHotel  />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="rooms">
            <Route
              index
              element={
                <ProtectedRoute>
                  <List columns={roomColumns} />
                </ProtectedRoute>
              }
            />
            <Route
              path=":productId"
              element={
                <ProtectedRoute>
                  <Single />
                </ProtectedRoute>
              }
            />
            <Route
              path="new"
              element={
                <ProtectedRoute>
                  <NewRoom  />
                </ProtectedRoute>
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
  )
}
export default App


