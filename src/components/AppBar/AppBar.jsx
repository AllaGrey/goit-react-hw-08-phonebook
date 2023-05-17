import { useAuth } from "hooks/useAuth";
import { Nav } from "components/Nav/Nav";
import { UserMenu } from "components/UserMenu/UserMenu";
import { AuthNav } from "components/AuthNav";
import { Header } from "./AppBar.styled";

export const AppBar = () => {
    const { isLoggedIn, user } = useAuth()

    return (
        <Header>
            <Nav/>
            {isLoggedIn ? <UserMenu user={user} /> : <AuthNav />}
        </Header>
    )
}

