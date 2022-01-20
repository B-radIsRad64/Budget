import styled from 'styled-components'
import { useBudgets } from '../contexts/bugetsContext'

import { Bttn } from './button' 
import CloseIcon from '@mui/icons-material/Close'
import Modal from '@mui/material/Modal'
import { MenuItem } from '@mui/material'
import { currencyFormatter } from '../utilss'

const Container = styled.div`
  outline: none;
  margin: 15px;
  background-color: #ffffff;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 15px;
  padding: 10px 0px;
`
const Button = styled.button`
  background-color: transparent;
  border: none;
`
const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 24px;
`
const FlexContainer = styled.div`
  display: flex;
`
export const ViewExpenses = ({ budgetId, handleClose }) => {
  const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } = useBudgets()
  const expenses = getBudgetExpenses(budgetId)
  const budget = budgets.find(b => b.id === budgetId)

    return (
      <Modal open={budgetId != null}>
        <Container>
          <Header>
            <FlexContainer>
             <h1>Expenses - {budget?.name}</h1>
              {budgetId && (
                  <Bttn onClick={() => {
                    deleteBudget(budget)
                    handleClose()
                  }} variant="outlined" size="small">Delete</Bttn>
              )}
            </FlexContainer>
            <Button onClick={handleClose}>
              <CloseIcon />
            </Button>
          </Header>
          <div>
            {expenses.map(expense => (
                <MenuItem key={expense.id}>
                  <MenuContainer>
                    <div>{expense.description}</div>
                    <div>{currencyFormatter.format(expense.amount)}</div>
                    <Bttn onClick={() => deleteExpense(expense)}variant="outlined">
                      <CloseIcon />
                    </Bttn>
                  </MenuContainer>
                </MenuItem>
            ))}
          </div>
        </Container>
      </Modal>
    )
}