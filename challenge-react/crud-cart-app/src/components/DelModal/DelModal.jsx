import React, { useEffect, useRef, useState } from 'react'
import { CloseBtn, Container, DelBtn, Div, HorizontalLine, Label } from './DelModalStyles'
import Backdrop from './BackdropContainer/BackdropContainer'

const DelModal = ({ setModalOpen, products, setProducts }) => {
  const modalRef = useRef(null)
  const [productList, setProductList] = useState([])
  const allDel = productList.every((product) => product.checked)

  useEffect(() => {
    setProductList(
      products.map((product) => ({
        ...product,
        checked: false,
      })),
    )
    const handler = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false)
      }
    }

    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  }, [])

  const handleOptionChange = (productId) => {
    const updatedOptions = productList.map((product) =>
      product.id === productId ? { ...product, checked: !product.checked } : product,
    )
    setProductList(updatedOptions)
  }

  const handleAll = () => {
    const newProductList = productList.map((product) => ({
      ...product,
      checked: !allDel,
    }))
    setProductList(newProductList)
  }

  const handelDel = () => {
    const filterd = productList.filter((product) => !product.checked)
    setProducts(filterd)
    setModalOpen(false)
  }

  console.log(productList)

  return (
    <>
      <Backdrop />
      <Container ref={modalRef}>
        <CloseBtn onClick={() => setModalOpen(false)}>X</CloseBtn>
        <Div>
          <label style={{ marginTop: '20px', cursor: 'pointer' }}>
            <input
              type="checkbox"
              style={{ marginRight: '10px' }}
              checked={allDel}
              onChange={() => handleAll()}
            />
            전체 선택
          </label>
        </Div>
        {productList &&
          productList.map((product) => (
            <Div key={product.id}>
              <Label ischecked={`${product.checked}`}>
                {product.checked && <HorizontalLine />}
                <input
                  type="checkbox"
                  checked={product.checked}
                  onChange={() => handleOptionChange(product.id)}
                />
                <span>{product.charge}</span>
                <span>{product.amount}</span>
              </Label>
            </Div>
          ))}

        <DelBtn onClick={handelDel}>목록 지우기</DelBtn>
      </Container>
    </>
  )
}

export default DelModal
