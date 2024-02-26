import React from 'react'

const Type = ({ orderType }) => {
  console.log('orderType', orderType)
  return (
    <div>
      <h2>주문 종류</h2>
      <p>하나의 가격</p>
      <p>총 가격:</p>
      <div
        style={{
          display: 'flex',
          flexDirection: orderType === 'options' ? 'column' : 'row',
        }}
      >
        itmes
      </div>
    </div>
  )
}

export default Type
