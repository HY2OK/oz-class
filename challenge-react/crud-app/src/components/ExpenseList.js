import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'
import { MdDelete } from 'react-icons/md'
import React, { useCallback } from 'react'

const ExpenseList = ({
  setExpenses,
  initialExpenses,
  handleDelete,
  handleEdit,
  clearItems,
}) => {
  const swap = useCallback((expense, source, destination) => {
    const arr = [...expense]
    ;[arr[source], arr[destination]] = [arr[destination], arr[source]]
    return arr
  }, [])

  const onDragEnd = (result) => {
    if (!result.destination) return
    setExpenses((expense) => swap(expense, result.source.index, result.destination.index))
    window.localStorage.setItem('products', JSON.stringify(initialExpenses))
  }

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef} className="list">
              {initialExpenses.map((expense, index) => (
                <ExpenseItem
                  key={expense.id}
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
