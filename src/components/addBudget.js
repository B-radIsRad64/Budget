import { useRef } from 'react'
import styled from 'styled-components'
import { useBudgets } from '../contexts/bugetsContext';

import { Bttn } from './button' 
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

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
export const AddBudget = ({ open, handleClose }) => {
    const nameRef = useRef()
    const maxRef = useRef()
    const { addBudget } = useBudgets()
    
    const handleSubmit = (e) => {
      e.preventDefault()
      addBudget({
        name: nameRef.current.value,
        max: parseFloat(maxRef.current.value),
      })
      handleClose()
    }

    return (
      <Modal open={open}>
        <Container onSubmit={handleSubmit}>
          <Header>
            <h1>New Budget</h1>
            <Button onClick={handleClose}>
              <CloseIcon />
            </Button>
          </Header>
          <div>
            <InputContainer>
              <Label>Name</Label>
              <TextField inputRef={nameRef} type="text" required></TextField>
            </InputContainer>
            <InputContainer>
              <Label>Maximum Spending</Label>
              <TextField inputRef={maxRef} type="number" required min={0} step={0.01}></TextField>
            </InputContainer>
          </div>
          <Footer>
            <Bttn variant="contained" size="large" type="submit">Add</Bttn>
          </Footer>
        </Container>
      </Modal>
    )
}