import styled from 'styled-components'
import { currencyFormatter } from '../utilss'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  font-size: 22px;
`
export const TitleContainer = ({name, amount, max}) => {

  return (
    <Container>
      <div>{name}</div>
      <div>{currencyFormatter.format(amount)} / 
        {max && (
          <span style={{ fontSize: 18 }}> {currencyFormatter.format(max)}</span>)}
      </div>
    </Container>
  )
}