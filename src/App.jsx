import './App.css'
import ItemListContainer from './components/itemListContainer/itemListContainer';
import Navbar from './components/navbar/navbar';


const app = () => {
  return (
  <div>
  <Navbar/> 
  <ItemListContainer txtList="Paco Rabanne"/>
  <ItemListContainer txtList="Calvin Klein"/>
  <ItemListContainer txtList="Moschino"/>
  <ItemListContainer txtList="Hugo Boss"/>
  </div>
  );
}

 export default app