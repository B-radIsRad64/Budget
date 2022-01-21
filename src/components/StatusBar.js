import styled from 'styled-components'
import { Slider } from '@mui/material'

const Container = styled.div`
  display: flex;
  justify-content: center;
`
export const StatusBar = ({ amount, max, color}) => {

  return(
    <Container>
      {max && (
        <Slider
          sx={{height: 15, margin: '0px 15px'}} 
          min={0} 
          max={max}
          value={amount}
          color={color}>
        </Slider>
      )}
    </Container>
  )
}