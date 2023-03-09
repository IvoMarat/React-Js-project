import { Route, Routes } from 'react-router-dom';
import './App.css'
import Ch from './components/filters/ch';
import Ck from './components/filters/ck';
import Pr from './components/filters/pr';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import Navbar from './components/navbar/navbar';

const app = () => {
  return (
  <div >
  <Navbar/> 
  <Routes>
  <Route path='/productos' element={<div className='container'><ItemListContainer/></div>} />
  <Route path='/productos/:id' element={<ItemDetailContainer/>} />
  <Route path='/productos/Ch' element={<Ch/>} />
  <Route path='/productos/Ck' element={<Ck/>} />
  <Route path='/productos/Pr' element={<Pr/>} />
  </Routes>
  </div>
  );
}

export default app