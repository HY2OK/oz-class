import { createContext, useMemo, useState } from 'react'

const OrderContext = createContext()

export function OrderContextProvider(props) {
  const [orderCounts, setOrderCounts] = useState({
    products: new Map(),
    options: new Map(),
  })

  const value = useMemo(() => {
    function updateItemCount(itemName, newItemCount, orderType) {
      const newOderCounts = { ...orderCounts }
      const oderCountsMap = orderCounts[orderType]
      oderCountsMap.set(itemName, parseInt(newItemCount))

      setOrderCounts(newOderCounts)
    }

    return [{ ...orderCounts }, updateItemCount]
  }, [orderCounts])

  return <OrderContext.Provider value {...props} />
}
