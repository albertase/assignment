import { useState } from 'react';
import './App.css';
import Countries from './components/Countries';
import Form from './components/Form';
import FormList from './components/FormList';
import Product from './components/Product';
import { UserList } from './data';

function App() {
  const [ news, setNews] = useState(UserList)
  const handleFormChange = (cal) => {
    setNews((fName, lName, uName)=> {
      return [...cal, {
        firstName: fName,
        lastName: lName,
        username: uName

      }]
    })
    
  }

  // const result = UserList.map(user => user)
  return (
    <div className="App">
      <Countries/>
      <Form saveForm={handleFormChange}/>
      <Product  names="Albert" name={news}/>
      <FormList name={news}/>
    </div>
  );
}

export default App;
