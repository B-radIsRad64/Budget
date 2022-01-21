import { useRef } from 'react'
import styled from 'styled-components'
import { useBudgets } from '../contexts/bugetsContext'

import { Bttn } from './button' 
import CloseIcon from '@mui/icons-material/Close'
import Modal from '@mui/material/Modal'
import { TextField } from '@mui/material'
import { Select } from '@mui/material'
import { MenuItem } from '@mui/material'

const Container = styled.form`
  outline: none;
  margin: 15px;
  background-color: #ffffff;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 15px;
`
const Button = styled.button`
  background-color: transparent;
  border: none;
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`
const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`
const Label = styled.label`
  padding-bottom: 5px;
  font-size: 18px;
`
const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 15px;
  padding-top: 15px;
  padding-bottom: 25px;
`
export const AddExpense = ({ open, handleClose, defaultBudgetId }) => {
    const descriptionRef = useRef()
    const amountRef = useRef()
    const budgetIdRef = useRef()
    const { addExpense, budgets } = useBudgets()

    const handleSubmit = (e) => {
      e.preventDefault()
      addExpense({
        description: descriptionRef.current.value,
        amount: parseFloat(amountRef.current.value),
        budgetId: budgetIdRef.current.value,
      })
      handleClose()
    }

    return (
      <Modal open={open}>
        <Container onSubmit={handleSubmit}>
          <Header>
            <h1>Add Expense</h1>
            <Button onClick={handleClose}>
              <CloseIcon />
            </Button>
          </Header>
          <div>
            <InputContainer>
              <Label>Description</Label>
              <TextField 
                inputRef={descriptionRef} 
                type="text" 
                required>
              </TextField>
            </InputContainer>
            <InputContainer>
              <Label>Amount</Label>
              <TextField 
                inputRef={amountRef} 
                type="number"
                required 
                min={0} 
                step={0.01}>
              </TextField>
            </InputContainer>
            <SelectContainer>
              <Label>Budget</Label>
                <Select 
                  defaultValue={defaultBudgetId}
                  autoWidth={true}
                  inputRef={budgetIdRef}
                  required min={0} 
                  step={0.01}>
                    {budgets.map(budget => (
                      <MenuItem 
                        key={budget.id} 
                        value={budget.id}>
                          {budget.name}
                      </MenuItem>
                    ))}
                </Select>
              </SelectContainer>
          </div>
          <Footer>
            <Bttn 
              variant="contained" 
              size="large" 
              type="submit">
                Add
            </Bttn>
          </Footer>
        </Container>
      </Modal>
    )
}