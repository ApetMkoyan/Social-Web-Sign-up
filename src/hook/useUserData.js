import { useState, useEffect } from 'react';
import { sendRequest } from './useSendRequest';

const useUserData = () => {
    const { get } = sendRequest();
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await get('http://localhost:5000/users');
            setUsersData(result);
        };

        fetchData();
    }, []);

    return { usersData };
};

export default useUserData;
