import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
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
