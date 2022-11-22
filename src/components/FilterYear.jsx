import React from 'react'

function FilterYear(props) {
    const handleSelectChanges = (e) => {
        props.filterYear(e.target.value)
    }
  return (
    <div>
        <select value={props.selected} name="" id="" onChange={handleSelectChanges}>
            <option value="2019">2019</option>
            <option value="2034">2034</option>
            <option value="2012">2012</option>
            <option value="2023">2023</option>
            <option value="2020">2020</option>
        </select>
    </div>
  )
}

export default FilterYear