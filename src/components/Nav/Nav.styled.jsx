import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.div`
display: flex;
gap: 10px;
`

export const NavLinkStyled = styled(NavLink)`
text-decoration: none;
&:hover {
    color: white;
}
`