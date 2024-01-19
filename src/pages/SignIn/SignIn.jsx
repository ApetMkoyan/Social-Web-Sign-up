import bigImage from '../../utilities/png/3d.png';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate, } from "react-router-dom";
import { useState, useEffect } from "react";
import { sendRequest } from "../../hook/useSendRequest";
import { IoIosContact, IoMdKey } from 'react-icons/io';

import "./SignIn.css";

const SignIn = () => {
    const navigate = useNavigate();
    const [usersData, setUsersData] = useState([]);
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const { get } = sendRequest();

    useEffect(() => {
        (async () => {
            const result = await get("http://localhost:5000/users");
            setUsersData(result);
        })();
    }, []);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handlerSubmit = (e) => {
        e.preventDefault();
        const { login, password } = e.target;

        const carrentUser = usersData.find(
            (el) =>
                el.password === password.value &&
                (el.fullName === login.value || el.email === login.value)
        )

        if (carrentUser) {
            navigate(`/resume/${carrentUser.id}`);
        }
    }


    return (
        <div className="SignIn">
            <div className="Logoss">
                <p className="LogoBird" />
                <span>Find 3D Objects, Mckups and Illustration here.</span>
                <img className="img3d" src={bigImage} alt="3D Image" />
            </div>
            <div className="content">
                <div className="inputs">
                    <form className="SignForm" onSubmit={handlerSubmit}>
                        <label>Login</label>
                        <IoIosContact className="name-iconn" />
                        <input
                            name="login"
                            placeholder={`    Email or Username`}
                            required=""
                        />
                        <div className="password-input">
                            <IoMdKey className="password-iconn" />
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="   Password"
                                value={password}
                                onChange={handlePasswordChange}
                                required=""
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="toggle-password-button"
                            >
                                {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                            </button>
                        </div>
                        <button className="log-In">
                            Login
                        </button>
                    </form>
                </div>
                <div className="log-inn">
                    <p className="log-in-text">No Account?</p>
                    <button className="btn-create" onClick={() => navigate("/CreateUser")}>
                        Create One!
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
