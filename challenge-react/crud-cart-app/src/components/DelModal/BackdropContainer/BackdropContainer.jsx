import React from 'react'
import styled from 'styled-components'

const BackdropContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(130, 130, 130, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
`

const Backdrop = ({ onClick }) => {
  return <BackdropContainer onClick={onClick} />
}

export default Backdrop
