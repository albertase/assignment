import React, { useState } from 'react'
import { UserList } from '../data'
import FilterYear from './FilterYear'
import FormList from './FormList'
import MainForm from './MainForm'

function Form(props) {
  
  const [years, setYears] = useState("2020")
  const [list, setList] = useState(UserList)


  const handleMainForm = (call) => {
    const save = {
      ...call,
    }

    setList(prevExpense => {
      return [...prevExpense]
    })
    props.saveForm(save)

  }

  const handleYear = year => {
    setYears(year);
    console.log(year)
  }
  return (
    <div className="container">
      <FilterYear selected={years} filterYear={handleYear}/>
        <MainForm onSave={handleMainForm} name={list}/>
        <FormList name={list}/>
    </div>
  )
}

export default Form