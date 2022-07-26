import { Route, Routes } from 'react-router-dom';
import Blogs from './Components/Blogs';
import Footer from './Components/HomePage/Footer';
import Header from './Components/HomePage/Header';
import Home from './Components/HomePage/Home';
import ItemDetail from './Components/ItemDetail';
import Login from './Components/Login';
import ManageInventory from './Components/ManageInventory';
import NotFound from './Components/NotFound';
import Register from './Components/Register';
import RequireAuth from './Components/RequireAuth';
import Subscribe from './Components/Subscribe';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <ItemDetail />
          </RequireAuth>
        }></Route>
        <Route path='/manage' element={<ManageInventory />}></Route>
        {/* <Route path='/add' element={}></Route>
        <Route path='/myitems' element={} ></Route> */}
        <Route path='/blog' element={<Blogs />}></Route>
        <Route path='/subscribe' element={<Subscribe />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
