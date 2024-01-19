import React from 'react';
import useRandomId from '../hook/useRandom';
import { IoMdMail, IoIosContact, IoMdKey } from 'react-icons/io';

const CreateUserForm = ({ onSubmit, createImg, newImg }) => {

    const { id: randomId, generateRandomId } = useRandomId();

    const createUserObject = (e) => {
        const { email, password, fullName } = e.target;


        const userObject = {
            id: randomId,
            email: email.value,
            password: password.value,
            fullName: fullName.value,
            Myfriends: [],
            image: newImg,
            profession: "",
            socialFB: "",
            socialLinkedin: "",
            socialTwiter: "",
            socialGitHub: "",
            phone: "",
            location: "",
            about: {
                aboutt: "", firstinfo: "", Secondinfo: "", Thirdinfo: "",
            },
        };
        return userObject;
    };

    return (
        <div className="contentt">
            <div className="inputs">
                <form onSubmit={(e) => onSubmit(createUserObject(e), e)}>
                    <label>Create Account</label>
                    <IoIosContact className="name-icon" />
                    <input name="fullName" type="text" placeholder="  FullName" required="" />
                    <IoMdMail className="mail-icon" />
                    <input name="email" type="text" placeholder="    Email" required="" />
                    <IoMdKey className="password-icon" />
                    <input name="password" type="password" placeholder="  Password" required="" />
                    <input className="file" name="file" type="file" onChange={createImg} />
                    <button type="submit">
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateUserForm;
