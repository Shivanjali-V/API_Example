import React from 'react'
import Row from './Row'

const Table = ({items}) => {
  return (
    <div className='table'>
        <table>
            <tbody>
            {items.map((item) => (
                <Row key = {item.id} item = {item} />
            ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table