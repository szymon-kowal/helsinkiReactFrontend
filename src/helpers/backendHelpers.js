import axios from "axios";

const baseUrl = "http://localhost:3001/api/persons";

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then((res) => res.data);
};

const create = (person, setPersons, persons) => {
    const response = axios
        .post(baseUrl, person)
        .then((response) => {
            setPersons([...persons, response.data]);
        })
        .catch((error) => {
            console.error("Error adding person:", error);
            alert("Failed to add person. Please try again.");
        });
};

const update = (id, newPerson) => {
    const request = axios.put(`${baseUrl}/${id}`, newPerson);
    return request.then((response) => response.data);
};

const deletePerson = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`);
    return request.then((res) => res.data);
};

const updateNumber = (id, data) => {
    const request = axios.put(`${baseUrl}/${id}`, data);
    return request.then((res) => res.data);
};

export default {
    getAll,
    create,
    update,
    deletePerson,
    updateNumber,
};
