import styled from 'styled-components'

export const AlertDiv = styled.div`
  padding: 0.75rem 1.25rem;
  color: var(--mainWhite);
  text-align: center;
  margin: 2rem auto 0 auto;
  border-radius: 2px;
  background: ${(props) => (props.type === 'success' ? '#4caf50' : '#c45141')};
`
