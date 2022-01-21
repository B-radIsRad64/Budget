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
  padding: 15px;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 15px;
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
  justify-content: space-between;
  font-size: 32px;
`
const ExpensesContainer = styled.div`
  display: flex;
`
const Expense = styled.div`
  margin-right: 15px;
`
const Title = styled.div`
  margin-right: 15px;
`
const Spacer = styled.div`
  margin-left: 15px;
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
             <Title>Expenses - {budget?.name}</Title>
            </FlexContainer>
            <Button onClick={handleClose}>
              <CloseIcon />
            </Button>
          </Header>
          <div>
            {expenses.map(expense => (
                <MenuItem key={expense.id}>
                  <MenuContainer>
                    <ExpensesContainer>
                      <Expense>{expense.description}:</Expense>
                      <div>{currencyFormatter.format(expense.amount)}</div>
                    </ExpensesContainer>
                    <Bttn onClick={() => deleteExpense(expense)}variant="outlined">
                      <CloseIcon />
                    </Bttn>
                  </MenuContainer>
                </MenuItem>
            ))}
            <Spacer>
              {budgetId && (
                <Bttn onClick={() => {
                  deleteBudget(budget)
                  handleClose()
                }} variant="outlined" size="small">Delete</Bttn>
              )}
            </Spacer>
          </div>
        </Container>
      </Modal>
    )
}