import { Fragment } from 'react'
import styled, { keyframes } from 'styled-components'
import colors from '../../style/colors'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Load = styled.div`
    padding: 10px;
    border: 6px solid ${colors.primary};
    border-bottom-color: transparent;
    border-radius: 22px;
    animation: ${rotate} 1s infinite linear;
    height: 0;
    width: 0;
`
const Container= styled.div`
  width:100%;
  height:200px;
  display:flex;
  align-items:center;
  justify-content:center;
`

export default function Loader() {
  return (
    <Fragment>
    <Container>
      <Load/>
    </Container>
    </Fragment>
  )
}

