import { useEffect, useState } from "react";

export default function SelectedContact({
    selectedContactId,
    setSelectedContactId,
}) {
    const [contact, setContact] = useState(null);

    useEffect(() => {
        async function fetchSingleUser(userId) {
        try {
            const res = await fetch(
            `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${userId}`
            );
        const json = await res.json();
        console.log(json);
        setContact(json);
    } catch (err) {
        console.log(err);
    }
}

if (selectedContactId) {
    fetchSingleUser(selectedContactId);
}
}, [selectedContactId]);

return (
    <div>
        <p>Selected Contact is {contact?.name}</p>
        <p>Website: {contact?.website}</p>
        <p>Username: {contact?.username}</p>
        <button onClick={() => setSelectedContactId(null)}>Close</button>
    </div>
    );
}
