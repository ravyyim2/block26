import React, { useState, useEffect } from "react";
import ContactRow from "../ContactRow/ContactRow";

export default function ContactList({ setSelectedContactId }) {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch(
                    "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const json = await response.json();
                console.log(json);
                setContacts(json);
            }   catch (error) {
                console.error(error);
        // Handle error, e.g., show a user-friendly message
            }
    }

    fetchUsers();
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="3">Contact List</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
                {contacts.map((contact) => (
                <ContactRow
                    contact={contact}
                    setSelectedContactId={setSelectedContactId}
                    key={contact.id}
                />
            ))}
        </tbody>
    </table>
    );
}
