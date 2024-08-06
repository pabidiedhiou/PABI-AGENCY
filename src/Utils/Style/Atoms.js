import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import Colors from './Colors'

export const StyledNavLink = styled(NavLink)`
  padding: 10px 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  ${(props) =>
    props.$isFullLink &&
    `color: white; 
    border-radius: 30px; 
    background-color: ${Colors.primary};`}
`
const rotate = keyframes`
 from {
 transform: rotate(0deg);
 }
 to {
 transform: rotate(360deg);
 }`
export const Loader = styled.div`
  padding: 10px;
  border: 6px solid ${Colors.primary};
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`
