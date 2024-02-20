import styled from 'styled-components'

export const FormCenter = styled.div`
  display: flex;
`

export const FormGroup = styled.div`
  padding: 1rem 0.75rem;
  flex: 1;
`

export const Label = styled.div`
  display: block;
  color: var(--secondColor);
  font-size: 1rem;
  text-transform: capitalize;
`

export const FormInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--secondColor);
  outline: none;
  height: 3rem;
  width: 100%;
  font-size: 16px;
  margin: 0 0 8px 0;
  padding: 0;
`
