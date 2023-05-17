import { Button, Nav } from "./AuthNav.styled"

export const AuthNav = () => {

    return (
        <Nav>
            <Button to='/login'>Log In</Button>
            <Button to='/signup'>Register</Button>
        </Nav>
    )
}