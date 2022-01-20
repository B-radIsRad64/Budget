import styled from 'styled-components'
import { currencyFormatter } from '../utilss'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  font-size: 18px;
`
const Name = styled.div`
  margin-right: 15px;
`
export const TitleContainer = ({name, amount, max}) => {

  return (
    <Container>
      <Name>{name}</Name>
      <div>{currencyFormatter.format(amount)} / 
        {max && (
          <span style={{ fontSize: 15 }}> {currencyFormatter.format(max)}</span>)}
      </div>
    </Container>
  )
}