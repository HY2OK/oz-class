import React, { useContext } from 'react'
import Type from '../../components/Type'
import { OrderContext } from '../../context/OrderContext'
import styles from './OrderPage.module.css'

const OrderPage = ({ setStep }) => {
  const [oderData] = useContext(OrderContext)

  return (
    <div className={styles.container}>
      <h1>Travel Products</h1>
      <div>
        <Type orderType="products" />
      </div>
      <div style={{ display: 'flex', marginTop: 20 }}>
        <div style={{ width: '50%' }}>
          <Type orderType="options" />
        </div>
        <div style={{ width: '50%' }}>
          <h2>Total Price: {oderData.totals.total}</h2>
          <button className={styles.btn} onClick={() => setStep(1)}>
            주문
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderPage
