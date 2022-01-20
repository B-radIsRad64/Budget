import styled from 'styled-components'

import { Card } from '@mui/material'
import { TitleContainer } from './titleContainer'
import { StatusBar } from './StatusBar'
import { CardButtons } from './cardButtons'

const Container = styled.div`
  padding: 15px;
`
export const Cards = ({ name, amount, max, onAddExpenseClick, onViewExpensesClick, hideButtons }) => {
  return (
    <Container>
      <Card>
        <TitleContainer 
          name={name}
          amount={amount}
          max={max} />
        <StatusBar 
          amount={amount}
          max={max} />
        {!hideButtons && (
          <CardButtons 
            onAddExpenseClick={onAddExpenseClick}
            onViewExpensesClick={onViewExpensesClick} />
        )}
      </Card>
    </Container>
  )
}
