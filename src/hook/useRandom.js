import { useState } from 'react';

const useRandomId = () => {
    const [id, setId] = useState('');

    const generateRandomId = () => {
        const randomId = Math.raund(Math.random * 1000);
        setId(randomId);
    };

    return { id, generateRandomId };
};

export default useRandomId;
