import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { MdDelete } from 'react-icons/md'
import React from 'react'

const ExpenseList = ({
  initialExpenses,
  handleDelete,
  handleEdit,
  clearItems,
  onDragEnd,
}) => {
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="todo-list">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef} className="list">
              {initialExpenses.map((expense, index) => (
                <ExpenseItem
                  key={expense.id}
                  id={expense.id}
                  index={index}
                  expense={expense}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              ))}

              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>

      {initialExpenses.length > 0 ? (
        <button className="btn" onClick={clearItems}>
          목록 지우기
          <MdDelete className="btn-icon" />
        </button>
      ) : null}
    </>
  )
}

export default ExpenseList
