import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {useEffect} from 'react';
import Card from './Card';
import Table from './Table'

function App() {
  let [data,setData] = useState(
    [
      {
        name:"Revanth",
        quality:"polite",
        visible:true
      },  
      {
        name:"Rahul",
        quality:"good",
        visible:true
      },
      {
        name:"veer",
        quality:"sweet",
        visible:true
      }
    ]
  )
  function removeItem() {
     setData([]);
     console.log(data);
  }
  

  return (
    <div className="App">
      <h1>React js Table assignment</h1>
      <Table />
    </div>
  );
}

export default App;
