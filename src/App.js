import { useState } from 'react'
import styled from 'styled-components'

import { Bttn } from './components/button'
import { Cards } from './components/cards'
import { AddBudget } from './components/addBudget'
import { AddExpense} from './components/addExpense'
import { useBudgets } from './contexts/bugetsContext'
import { TotalBudgetCard } from './components/totalBudgetCard'
import { ViewExpenses } from './components/viewExpenses'

const Container = styled.div`
  
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`
const Title = styled.h1`
  font-size: 40px;
  margin: 0;
`
const ButtonContainer = styled.div`
  width: 275px;
  display: flex;
  justify-content: space-between;
`
export const App = () => {
  
  const [showAddBudget, setShowAddBudget] = useState(false)
  const [showAddExpense, setShowAddExpense] = useState(false)
  const [viewExpensesBudgetId, setViewExpensesBudgetId] = useState()
  const [addExpenseBudgetId, setAddExpenseBudgetId] = useState()
  const { budgets, getBudgetExpenses } = useBudgets()

  const openAddExpense = (budgetId) => {
    setShowAddExpense(true)
    setAddExpenseBudgetId(budgetId)
  }

  return (
    <>
      <Container>
        <Header>
          <Title>Budget</Title>
          <ButtonContainer>
            <Bttn onClick={() => setShowAddBudget(true)} variant='contained'>Add Budget</Bttn>
            <Bttn onClick={() => openAddExpense()} variant='outlined'>Add Expense</Bttn>
          </ButtonContainer>
        </Header>
        {budgets.map(budget => {
          const amount = getBudgetExpenses(budget.id).reduce(
            (total, expense) => total + expense.amount, 
              0
            )
            return (
              <Cards 
                key={budget.id} 
                name={budget.name} 
                amount={amount} 
                max={budget.max}
                onAddExpenseClick={() => openAddExpense(budget.id)}
                onViewExpensesClick={() => setViewExpensesBudgetId(budget.id)}/>
            )
        })}
        <TotalBudgetCard />
      </Container>
      <AddBudget 
        open={showAddBudget}
        handleClose={() => setShowAddBudget(false)}/>
      <AddExpense 
        open={showAddExpense}
        defaultBudgetId={addExpenseBudgetId}
        handleClose={() => setShowAddExpense(false)}
      />
      <ViewExpenses 
        budgetId={viewExpensesBudgetId}
        handleClose={() => setViewExpensesBudgetId()}
      />
    </>
  )
}