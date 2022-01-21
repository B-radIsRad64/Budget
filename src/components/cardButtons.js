import styled from 'styled-components'

import { Bttn } from './button'

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 15px;
  height: 70px;
  width: 300px;
`
export const CardButtons = ({ onAddExpenseClick, onViewExpensesClick, color }) => {
  
  return (
    <Container>
      <ButtonContainer>
        <Bttn onClick={onAddExpenseClick} variant='outlined' color={color}>
          Add Expense
        </Bttn>
        <Bttn onClick={onViewExpensesClick} variant='outlined' color={color}>
          View Expenses
        </Bttn>
      </ButtonContainer>
    </Container>
  )
}