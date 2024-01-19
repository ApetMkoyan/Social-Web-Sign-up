import React from "react";
import location from "../utilities/svg/Location.svg";
import phone from "../utilities/svg/Phone.svg";
import email from "../utilities/svg/Email.svg";
const UserInfo = ({ user }) => {
    return (
        <div className="userInf">
            <img className="Photo" src={user?.image} alt={`${user?.fullName} Photo`} />
            <h1>{user?.fullName}</h1>
            <h2>{user?.profession}</h2>
            <ul className="social">
                <a>{user?.socialFB}</a>
                <a>{user?.socialLinkedin}</a>
                <a>{user?.socialTwiter}</a>
                <a>{user?.socialGitHub}</a>
            </ul>
            <div className="infoSection">
                <p>
                    <img src={phone} alt="phone" />
                    <span className="placeHolder">phone</span>
                    <br />
                    <span className="holderInfo">{user?.phone}</span>
                </p>
                <p>
                    <img src={email} alt="email" />
                    <span className="placeHolder">email</span>
                    <br />
                    <span className="holderInfo">{user?.email}</span>
                </p>
                <p>
                    <img src={location} alt="location" />
                    <span className="placeHolder">location</span>
                    <br />
                    <span className="holderInfo">{user?.location}</span>
                </p>
            </div>
        </div>
    );
};

export default UserInfo;
