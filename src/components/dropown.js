import React, { useState } from 'react';

function Dropdown({ options }) {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };


    return (
        <select id="dropdown" value={selectedOption} onChange={handleOptionChange}>
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}

export default Dropdown;
