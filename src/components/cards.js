import styled from 'styled-components'

import { Card } from '@mui/material'
import { TitleContainer } from './titleContainer'
import { StatusBar } from './StatusBar'
import { CardButtons } from './cardButtons'

const Container = styled.div`
  padding: 15px;
`
export const Cards = ({ name, amount, max, onAddExpenseClick, onViewExpensesClick, hideButtons }) => {

  const lowBorder = max / 3
  const highBorder = lowBorder * 2
  let color = 'primary'
  let bgColor = ''
  if (amount <= lowBorder && amount !== 0) {
    color = 'secondary'
    bgColor = '#c8e6c9'
  } else if (amount <= highBorder && amount !== 0) {
    color = 'warning'
    bgColor = '#fff9c4'
  } else if (amount > highBorder && amount !== 0) {
    color = 'error'
    bgColor = '#ffcdd2'
  } else {
    color = 'primary'
    bgColor = ''
  }

  return (
    <Container>
      <Card sx={{ backgroundColor: bgColor}}>
        <TitleContainer 
          name={name}
          amount={amount}
          max={max} />
        <StatusBar 
          amount={amount}
          max={max} 
          color={color}/>
        {!hideButtons && (
          <CardButtons 
            onAddExpenseClick={onAddExpenseClick}
            onViewExpensesClick={onViewExpensesClick}
          />
        )}
      </Card>
    </Container>
  )
}
