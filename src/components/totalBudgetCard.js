import { useBudgets } from '../contexts/bugetsContext'
import { Cards } from './cards'

export const TotalBudgetCard = () => {
  const { expenses, budgets } = useBudgets()
  const amount = expenses.reduce((total, expense) => total + expense.amount, 0)
  const max = budgets.reduce((total, budget) => total + budget.max, 0)
  if (max === 0) return null
  return (
    <Cards amount={amount} name="Total" max={max} hideButtons/>
  )
}