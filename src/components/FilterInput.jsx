const FilterInput = ({ setFilterString }) => {
    const handleFilterChange = (event) => {
        setFilterString(event.target.value);
    };

    return (
        <div>
            <div>Filter by substring:</div>
            <input type="text" onChange={handleFilterChange} />
        </div>
    );
};

export default FilterInput;
