import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'

const ExpenseList = ({ initialExpenses, handleDelete }) => {
  return (
    <>
      <ul className="list">
        {initialExpenses.map((expense, index) => {
          return <ExpenseItem key={index} expense={expense} handleDelete={handleDelete} />
        })}
      </ul>
      <button className="btn">목록 지우기</button>
    </>
  )
}

export default ExpenseList
