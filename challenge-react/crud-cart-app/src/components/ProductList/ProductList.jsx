import { MdDelete } from 'react-icons/md'
import ProductItem from './ProductItem/ProductItem'
import { Ul } from './ProductListStyles'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { useState } from 'react'
import DelModal from '../DelModal/DelModal'

const ProductList = ({ products, setProducts, handleAlert }) => {
  const [modalOpen, setModalOpen] = useState(false)

  const handleDelete = (id) => {
    const newProducts = products.filter((expense) => expense.id !== id)
    setProducts(newProducts)
    window.localStorage.setItem('products', JSON.stringify(newProducts))
    handleAlert({ type: 'danger', text: '아이템이 삭제되었습니다.' })
  }

  const onDragEnd = (result) => {
    if (!result.destination) return

    const newExpenses = Array.from(products)
    const [movedExpense] = newExpenses.splice(result.source.index, 1)
    newExpenses.splice(result.destination.index, 0, movedExpense)

    setProducts(newExpenses)
    window.localStorage.setItem('products', JSON.stringify(newExpenses))
  }

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="todo-list">
          {(provided) => (
            <Ul {...provided.droppableProps} ref={provided.innerRef}>
              {products.map((product, index) => {
                return (
                  <ProductItem
                    key={index}
                    index={index}
                    product={product}
                    handleDelete={handleDelete}
                    products={products}
                    setProducts={setProducts}
                    handleAlert={handleAlert}
                  />
                )
              })}
              {provided.placeholder}
            </Ul>
          )}
        </Droppable>
      </DragDropContext>

      {products.length > 0 ? (
        <>
          <button className="btn" onClick={() => setModalOpen(true)}>
            목록 지우기
            <MdDelete className="btn-icon" />
          </button>
          {modalOpen && (
            <DelModal
              setModalOpen={setModalOpen}
              products={products}
              setProducts={setProducts}
            />
          )}
        </>
      ) : null}
    </>
  )
}

export default ProductList
