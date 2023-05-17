import { useDispatch } from "react-redux"
import { logOut } from "redux/auth/authOperations"
import { Menu, Button } from "./UserMenu.styled"

export const UserMenu = ({user}) => {

    const dispatch = useDispatch()

    return (
        <Menu>
            <p>Welcome, {user.name} </p>
            <Button type="button" onClick={()=>dispatch(logOut())}>Log Out</Button>
        </Menu>
    )
}