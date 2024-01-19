import React from 'react';
import CreateUserForm from './CreateUserForm';
import newImg from '../hook/useCreateImg';
import { useNavigate } from 'react-router-dom';

const CreateUser = ({ newImg, handleSubmit, handleImageUpload, currentLanguage }) => {
    const navigate = useNavigate();

    return (
        <div className="content">
            <div className="inputs">
                <CreateUserForm
                    newImg={newImg}
                    onSubmit={handleSubmit}
                    createImg={handleImageUpload}
                    currentLanguage={currentLanguage}
                />
            </div>
            <div className="log-in">
                <p className="log-in-text">
                    {currentLanguage === 'en' ? 'Already have an Account?' : '¿Ya tienes una cuenta?'}
                </p>

                <button className="btn-log" onClick={() => navigate("/")}>
                    {currentLanguage === 'en' ? 'Log in' : 'Iniciar sesión'}
                </button>

               
            </div>
        </div>
    );
};

export default CreateUser;
