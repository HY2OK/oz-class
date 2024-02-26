import React, { useContext, useState } from 'react'
import { OrderContext } from '../../context/OrderContext'

const SummaryPage = ({ setStep }) => {
  const [checked, setChecked] = useState(false)
  const [oderDetails] = useContext(OrderContext)

  const productArray = Array.from(oderDetails.products)
  const productList = productArray.map(([key, value]) => (
    <li key={key}>
      {value} {key}
    </li>
  ))

  const hasOptions = oderDetails.options.size > 0
  let optionsDisplay = null
  if (hasOptions) {
    const optionsArray = Array.from(oderDetails.options.keys())
    const optionsList = optionsArray.map((key) => <li key={key}>{key}</li>)
    optionsDisplay = (
      <>
        <h2>옵션: {oderDetails.totals.options}</h2>
        <ul>{optionsList}</ul>
      </>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStep(2)
  }

  return (
    <div>
      <h1>주문 확인</h1>
      <h2>여행 상품: {oderDetails.totals.products}</h2>
      <ul>{productList}</ul>
      {optionsDisplay}
      <form onSubmit={handleSubmit}>
        <input
          type="checkbox"
          checked={checked}
          id="confirm-checkbox"
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label htmlFor="confirm-checkbox">주문하려는 것을 확인하셨나요?</label>
        <br />
        <button disabled={!checked} type="submit">
          주문 확인
        </button>
      </form>
    </div>
  )
}

export default SummaryPage
