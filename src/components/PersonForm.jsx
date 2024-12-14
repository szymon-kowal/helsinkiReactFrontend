import { useState } from "react";

const PersonForm = ({ addPerson, persons, updateNumber }) => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const existingPerson = persons.find((person) => person.name === name);
        if (existingPerson) {
            if (existingPerson.number !== number) {
                console.log(existingPerson);
                updateNumber(existingPerson.id, {
                    id: existingPerson.id,
                    name: existingPerson.name,
                    number: number,
                });
                return;
            }
            alert(`${name} is already added to the phonebook`);
            return;
        }

        const personObject = { name, number };
        addPerson(personObject);

        setName("");
        setNumber("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                Name:{" "}
                <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                Number:{" "}
                <input
                    type="text"
                    value={number}
                    onChange={(event) => setNumber(event.target.value)}
                />
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    );
};

export default PersonForm;
