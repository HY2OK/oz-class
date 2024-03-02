import { useState } from 'react'
import OrderPage from './pages/OrderPage'
import SummaryPage from './pages/SummaryPage'
import CompletePage from './pages/CompletePage'
import NavBar from './pages/NavBar/NavBar'

function App() {
  const [step, setStep] = useState(0)

  return (
    <div
      style={{
        padding: '4rem',
        minHeight: '100vh',
        boxSizing: 'border-box',
        backgroundColor: '#e0e0e0',
      }}
    >
      <NavBar step={step} />
      {step === 0 && <OrderPage setStep={setStep} />}
      {step === 1 && <SummaryPage setStep={setStep} />}
      {step === 2 && <CompletePage setStep={setStep} />}
    </div>
  )
}

export default App
