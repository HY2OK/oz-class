import './ExpenseItem.css'
import { MdDelete, MdEdit } from 'react-icons/md'
import { Draggable } from 'react-beautiful-dnd'
import React from 'react'

const ExpenseItem = React.memo(({ index, expense, handleEdit, handleDelete }) => {
  return (
    <Draggable key={`expense${index}`} draggableId={`item-${index}`} index={index}>
      {(provided) => {
        return (
          <li
            className="item"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className="info">
              <span className="expense">{expense.charge}</span>
              <span className="amount">{expense.amount}</span>
            </div>
            <div>
              <button className="edit-btn" onClick={() => handleEdit(expense.id)}>
                <MdEdit />
              </button>
              <button className="clear-btn" onClick={() => handleDelete(expense.id)}>
                <MdDelete />
              </button>
            </div>
          </li>
        )
      }}
    </Draggable>
  )
})

export default ExpenseItem
