import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavMenu from "../../NavMenu/NavMenu";
import { sendRequest } from "../../hook/useSendRequest";
import UserInfo from "../../components/UserInfo";
import Loading from "../../components/Loading/Loading";

import './WorkPage.css';

const WorkPage = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const [isEditMode, setIsEditMode] = useState(false);
    const [loading, setLoading] = useState(true);
    const { get, put } = sendRequest();
    const [currentUserId, setCurrentUserId] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const userResponse = await get(`http://localhost:5000/users/${id}`);
            setUser(userResponse);
            setCurrentUserId(userResponse.id);
            setTimeout(() => setLoading(false), 2000);
        };
        fetchData();
    }, [id]);

    const toggleEditMode = () => {
        setIsEditMode(!isEditMode);
    };

    const handleUpdate = async () => {
        setLoading(true);
        const response = await put(`http://localhost:5000/users/${id}`, user);
        toggleEditMode();
        setTimeout(() => setLoading(false), 2000);
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="WorkPage">
            <UserInfo user={user} isEditMode={isEditMode} onUpdate={handleUpdate} />
            <div className="MyWorks">
                <p >My Works</p>
                <div className="worksInfo"></div>
            </div>
            <NavMenu onToggleEditMode={toggleEditMode} currentUserId={currentUserId} />
            {/* <WorkList works={works} /> */}
            <div className="processWork">
                <p >in Process...</p>
                <div className="processInfo"></div></div>

        </div>
    );
};

export default WorkPage;
