import { useEffect, useState } from 'react';
import './App.css';
import Buttons from './components/Buttons';
//import Data from './components/Data';
import Table from './components/Table';

function App() {

  const API_URL = "https://jsonplaceholder.typicode.com/"
  const [items,setItems] = useState([])
  const [value,setValue] = useState('users')


  useEffect(() => {

    const fetchData = async () => {
      const tempUrl = `${API_URL}${value}`
      try{
        const response = await fetch(tempUrl);
        if(!response.ok) throw Error("Error in Fetching Data")
  
        const listItems = await response.json()
        setItems(listItems)
      }
      catch(err){
       console.log(err)
      }
    }

  fetchData();
  }, [value])


  return(
    <>
      <Buttons
        value = {value}
        setValue = {setValue}
      />
      {/* <Data 
        items = {items}
      /> */}
      <Table 
        items={items}
      />
    </>
  )
}

export default App;