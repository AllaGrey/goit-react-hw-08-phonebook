import { Section, StyledLink } from "./HomePage.styled"

export default function HomePage () {

    return (
        <Section>
            <h1>Welcome to your personal Phonebook</h1>
            <StyledLink to={'/login'}>Yes, I already have a registration</StyledLink>
            <StyledLink to={'/signup'}>No, I want to register now</StyledLink>
        </Section>
    )
}