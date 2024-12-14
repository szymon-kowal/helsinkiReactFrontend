const FilteredPersons = ({ persons = [], filterString, deletePerson }) => {
    const filteredPersons = persons.filter((person) =>
        person.name.toLowerCase().includes(filterString.toLowerCase())
    );

    return (
        <>
            {filteredPersons.map((person) => (
                <div key={person.name}>
                    {person.name} {person.number}
                    <button onClick={() => deletePerson(person.id)}>
                        Delete
                    </button>
                </div>
            ))}
        </>
    );
};

export default FilteredPersons;
