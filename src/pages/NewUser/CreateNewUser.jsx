import React from 'react';
import { useNavigate } from 'react-router-dom';
import useUserData from '../../hook/useUserData';
import useLanguage from '../../hook/useLanguage';
import CreateUser from '../../components/CreateUser';
import bigImage from '../../utilities/png/3d.png';
import { sendRequest } from '../../hook/useSendRequest';
import useImageUpload from '../../hook/useCreateImg';

import './newUser.css';

const CreateNewUser = () => {
    const navigate = useNavigate();
    const { usersData } = useUserData();
    const { currentLanguage, handleLanguageChange } = useLanguage('en');
    const { post } = sendRequest();
    const { newImg, handleImageUpload } = useImageUpload();

    const handleSubmit = async (newUser, e) => {
        e.preventDefault();

        if (
            usersData.some(
                (el) =>
                    el.fullName === newUser.fullName ||
                    el.email === newUser.email ||
                    newUser.fullName === '' ||
                    newUser.email === '' ||
                    newUser.password === ''
            )
        ) {
            return alert('wrong');
        } else {
            const result = await post('http://localhost:5000/users', newUser);
            navigate('/');
            e.target.reset();
        }
    };

    return (
        <div className="SignUp">
            <div className="Logos">
                <p className="LogoBird" />
                <span>Find 3D Objects, Mckups and Illustration here.</span>
                <img className="img3d" src={bigImage} alt="3D Image" />
            </div>
            <CreateUser
                newImg={newImg}
                handleSubmit={handleSubmit}
                handleImageUpload={handleImageUpload}
                currentLanguage={currentLanguage}
            />
        </div>
    );
};

export default CreateNewUser;
