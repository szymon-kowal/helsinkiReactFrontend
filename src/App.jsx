import { useEffect, useState } from "react";
import PersonForm from "./components/PersonForm";
import FilterInput from "./components/FilterInput";
import FilteredPersons from "./components/FilteredPersons";
import backendHelpers from "./helpers/backendHelpers";
import NotificationMessage from "./components/NotifcationMessage";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [filterString, setFilterString] = useState("");
    const [message, setMessage] = useState(null);

    useEffect(() => {
        backendHelpers.getAll().then((data) => {
            setPersons(data);
        });
    }, []);

    const addPerson = (person) => {
        backendHelpers.create(person, setPersons, persons);
        setMessage(`Added ${person.name}`);
        setTimeout(() => {
            setMessage(null);
        }, 3000);
    };

    const deletePerson = (personId) => {
        const deltePersonRes = backendHelpers
            .deletePerson(personId)
            .then((res) => {
                console.log(res);
                setPersons(persons.filter((person) => person.id !== res.id));
            })
            .catch((err) => {
                alert("Error, cant delete this person :c", err);
                setMessage(`Added ${person.name}`);
            });
    };

    const updateNumber = (id, data) => {
        const updatedPerson = backendHelpers
            .updateNumber(id, data)
            .then((data) =>
                setPersons(
                    persons.map((person) => {
                        if (person.id === data.id) {
                            return data;
                        }
                        return person;
                    })
                )
            )
            .catch((err) => {
                setMessage(`Error updating number: ${err.message}`);
                setTimeout(() => {
                    setMessage(null);
                }, 3000);
            });
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <NotificationMessage message={message}></NotificationMessage>
            <FilterInput setFilterString={setFilterString} />
            <PersonForm
                addPerson={addPerson}
                persons={persons}
                updateNumber={updateNumber}
            />
            <h2>Numbers</h2>
            <FilteredPersons
                persons={persons}
                filterString={filterString}
                deletePerson={deletePerson}
            />
        </div>
    );
};

export default App;
