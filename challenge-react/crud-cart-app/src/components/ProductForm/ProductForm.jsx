import { useState } from 'react'
import { MdSend } from 'react-icons/md'
import { FormCenter, FormGroup, FormInput, Label } from './ProductFormStyles'

const ProductForm = ({ products, setProducts, handleAlert }) => {
  const [productInfo, setProductInfo] = useState({
    charge: '',
    amount: 0,
  })

  const handleChange = (e) => {
    setProductInfo((product) => ({
      ...product,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { charge, amount } = productInfo
    if (charge !== '' && amount > 0) {
      const newProduct = { id: crypto.randomUUID(), charge, amount }
      const newProducts = [...products, newProduct]
      setProducts(newProducts)
      window.localStorage.setItem('products', JSON.stringify(newProducts))
      handleAlert({ type: 'success', text: '아이템이 생성되었습니다.' })
      setProductInfo({ charge: '', amount: 0 })
    } else {
      handleAlert({
        type: 'danger',
        text: 'charge는 빈 값일 수 없으며 amount 값은 0보다 커야 합니다.',
      })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormCenter>
        <FormGroup>
          <Label htmlFor="charge">상품</Label>
          <FormInput
            type="text"
            id="charge"
            name="charge"
            placeholder="예) 콜라"
            value={productInfo.charge}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="amount">비용</Label>
          <FormInput
            type="number"
            id="amount"
            name="amount"
            placeholder="예) 100"
            value={productInfo.amount}
            onChange={handleChange}
          />
        </FormGroup>
      </FormCenter>
      <button type="submit" className="btn">
        제출
        <MdSend className="btn-icon" />
      </button>
    </form>
  )
}

export default ProductForm
