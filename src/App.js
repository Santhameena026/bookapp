import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Inputsearch from './Components/Inputsearch';
import Books from './Components/Books';
import { useState } from 'react';
import axios from "axios";



function App() {

  const [search,setSearch] = useState('');
  const [bookData,setData] =useState([]);
  const Key = 'AIzaSyArmNlFx7KsP5jctI2AsbSjK0dBLEVVmDg';
 
     const searchbook = (evt) =>{
      if(evt.key==="Enter"){
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${Key}`)
        .then(res=>setData(res.data.items))
        .catch(err=>console.log(err))
        setSearch("")
        }
     }
  return (
    <div >
      <Inputsearch search={search} setSearch={setSearch} searchbook={searchbook}/>
      {
      <Books book={bookData} />}
     
    </div>
  );
}

export default App;
