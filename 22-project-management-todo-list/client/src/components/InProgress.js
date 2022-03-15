import React from 'react'

export default function InProgress(props) {
  const listItems = props.list.map(item => {
    return <li key={item.id}>
      <span>{item.content}</span>
    </li>
  })
  return (
    <div className='col-md-4 col-lg-4 col-sm-12'>
        <h2>In Progress List</h2>
        <ul>
            {listItems}
        </ul>
    </div>
  )
}