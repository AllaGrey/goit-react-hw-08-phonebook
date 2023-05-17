import { ContactsForm } from "components/ContactsForm/ContactsForm"
import { Filter } from "components/Filter/Filter"
import { ContactList, Title } from "components/App.styled"
import { Contacts } from "components/Contacts/Contacts"
import { Section } from "./HomePage.styled"


export default function PhoneBook () {
    return (
        <Section>
        <ContactsForm  />
        <Title>Contacts</Title>
        <Filter />
        <ContactList>
            <Contacts  />
        </ContactList>
        </Section>
    )
}