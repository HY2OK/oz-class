import { useEffect, useState } from 'react'
import ProductForm from '../../components/ProductForm/ProductForm'
import ProductList from '../../components/ProductList/ProductList'
import { MainContainer, Section, SubContainer, TotalSection } from './CartPageStyles'
import Alert from '../../components/Alert/Alert'

const CartPgage = () => {
  const [products, setProducts] = useState([])
  const [alert, setAlert] = useState({ show: false })

  useEffect(() => {
    const existProducts = JSON.parse(window.localStorage.getItem('products'))
    if (existProducts !== null) setProducts(existProducts)
  }, [])

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text })
    setTimeout(() => {
      setAlert({ show: false })
    }, 3000)
  }

  return (
    <MainContainer>
      <SubContainer>
        {alert.show ? <Alert type={alert.type} text={alert.text} /> : null}
        <h1>장바구니</h1>

        <Section>
          <ProductForm
            products={products}
            setProducts={setProducts}
            handleAlert={handleAlert}
          />
        </Section>

        <Section>
          <ProductList
            products={products}
            setProducts={setProducts}
            handleAlert={handleAlert}
          />
        </Section>

        <TotalSection>
          <p>
            총합계:{' '}
            <span>
              {products
                .reduce((acc, cur) => {
                  return (acc += Number(cur.amount))
                }, 0)
                .toLocaleString()}
              원
            </span>
          </p>
        </TotalSection>
      </SubContainer>
    </MainContainer>
  )
}

export default CartPgage
