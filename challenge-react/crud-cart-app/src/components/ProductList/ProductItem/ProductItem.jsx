import React, { useEffect, useState } from 'react'
import { MdDelete, MdEdit, MdCheck } from 'react-icons/md'
import {
  AmountDiv,
  AmountInput,
  ClearBtn,
  EditBtn,
  InfoDiv,
  ItemLi,
  ProductDiv,
  ProductInput,
} from './ProductItemStyles'
import { Draggable } from 'react-beautiful-dnd'

const ProductItem = ({
  product,
  index,
  handleDelete,
  products,
  setProducts,
  handleAlert,
}) => {
  const [edit, setEdit] = useState('false')
  const [productInfo, setProductInfo] = useState({})

  useEffect(() => {
    setProductInfo({
      id: product.id,
      charge: product.charge,
      amount: product.amount,
    })
  }, [product.amount, product.charge, product.id, products])

  const handleChange = (e) => {
    setProductInfo((prevProduct) => ({
      ...prevProduct,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSave = (id) => {
    setEdit('false')

    const newProducts = products.map((product) => {
      if (id === productInfo.id) {
        if (
          product.charge !== productInfo.charge ||
          product.amount !== productInfo.amount
        ) {
          handleAlert({ type: 'success', text: '아이템이 수정되었습니다.' })
        }
        return productInfo
      }
      return product
    })
    setProducts(newProducts)
    window.localStorage.setItem('products', JSON.stringify(newProducts))
  }

  return (
    <Draggable key={product.id} draggableId={product.id} index={index}>
      {(provided) => (
        <ItemLi
          edit={edit}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {edit === 'true' ? (
            <InfoDiv>
              <ProductInput
                type="text"
                name="charge"
                value={productInfo.charge}
                onChange={handleChange}
                autoFocus
              />
              <AmountInput
                type="number"
                name="amount"
                value={productInfo.amount}
                onChange={handleChange}
              />
            </InfoDiv>
          ) : (
            <InfoDiv>
              <ProductDiv>{productInfo.charge}</ProductDiv>
              <AmountDiv>{productInfo.amount}</AmountDiv>
            </InfoDiv>
          )}
          <div>
            {edit === 'true' ? (
              <EditBtn onClick={() => handleSave(product.id)}>
                <MdCheck />
              </EditBtn>
            ) : (
              <EditBtn onClick={() => setEdit('true')}>
                <MdEdit />
              </EditBtn>
            )}
            <ClearBtn onClick={() => handleDelete(product.id)}>
              <MdDelete />
            </ClearBtn>
          </div>
        </ItemLi>
      )}
    </Draggable>
  )
}

export default ProductItem
