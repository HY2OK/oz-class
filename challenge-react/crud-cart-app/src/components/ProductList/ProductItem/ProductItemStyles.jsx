import styled from 'styled-components'

export const ItemLi = styled.li.withConfig({
  shouldForwardProp: (prop) => prop !== 'edit',
})`
  background-color: #fff;
  line-height: 1.5rem;
  padding: 10px 20px;
  margin-bottom: 1rem;
  border: ${(props) =>
    props.edit === 'true' ? '2px solid var(--mainGreen);' : '1px solid #e0e0e0'};
  display: flex;
  border-radius: 5px;
  justify-content: space-between;
  &:hover {
    width: 100%;
    transform: scale(1.02);
  }
`

export const InfoDiv = styled.div`
  flex: 0 0 60%;
  display: flex;
  justify-content: space-between;
`

export const ProductDiv = styled.div`
  margin-right: 2rem;
`

export const AmountDiv = styled.div`
  font-weight: 300;
`

const InputBase = styled.input`
  border: none;
  outline: none;
  background: none;
  font-size: 1rem;
`

export const ProductInput = styled(InputBase)`
  color: #000;
  font-weight: 500;
`

export const AmountInput = styled(InputBase)`
  text-align: right;
  font-weight: 300;

  /* Webkit outer spin button */
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Webkit inner spin button */
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

const ButtonBase = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  outline: none;
  cursor: pointer;
`

export const EditBtn = styled(ButtonBase)`
  color: var(--mainGreen);
`

export const ClearBtn = styled(ButtonBase)`
  color: var(--mainRed);
`
