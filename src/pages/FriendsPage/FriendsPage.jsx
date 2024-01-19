import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavMenu from "../../NavMenu/NavMenu";
import { sendRequest } from "../../hook/useSendRequest";
import FriendsList from "../../components/FriendsList";
import RecommendedFriendsList from "../../components/RecommendedFriendsList";
import UserInfo from "../../components/UserInfo";
import './FriendsPage.css';

const FriendsPage = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const [users, setUsers] = useState([]);
    const [friends, setFriends] = useState([]);
    const [currentUserId, setCurrentUserId] = useState(null);
    const { get, put } = sendRequest();

    useEffect(() => {
        const fetchData = async () => {
            const userResponse = await get(`http://localhost:5000/users/${id}`);
            setUser(userResponse);
            setCurrentUserId(userResponse.id);

            const usersResponse = await get(`http://localhost:5000/friends`);
            setUsers(usersResponse);
            setFriends(userResponse.Myfriends || []);
        };
        fetchData();
    }, [id]);

    const addToFriends = async (friend) => {
        const userExistsIndex = friends.findIndex((existingUser) => existingUser.id === friend.id);
        let updatedFriends = [...friends];

        if (userExistsIndex === -1) {
            updatedFriends.push(friend);
            await addFriend(user, friend);
        } else {
            updatedFriends = updatedFriends.filter((f) => f.id !== friend.id);
            await deleteFriend(user, friend.id);
        }
        setFriends(updatedFriends);
    };

    const modifyFriendInUserData = async (userData, friend, operation) => {
        userData.Myfriends = operation(userData.Myfriends, friend);

        await put(`http://localhost:5000/users/${id}`, userData);
    };
    const toggleEditMode = () => {
      };
    const addFriend = async (user, friend) => {
        const modifiedFriend = {
            id: friend.id,
            firstName: friend.firstName,
            lastName: friend.lastName,
            image: friend.image,
        };

        await modifyFriendInUserData(user, modifiedFriend, (friendsArray, friend) => [...friendsArray, friend]);
    };

    const deleteFriend = async (user, friendId) => {
        await modifyFriendInUserData(user, friendId, (friendsArray, friendId) => friendsArray.filter(friend => friend.id !== friendId));
    };



    return (
        <div className="HomePage">
                <UserInfo user={user} />

            <p className="MyFriends">My Friends</p>
            <NavMenu onToggleEditMode={toggleEditMode} currentUserId={currentUserId} />
            <FriendsList friends={friends} />

            <p className="AddFriendTitle">Recommended friends</p>
            <RecommendedFriendsList
                users={users}
                friends={friends}
                addToFriends={addToFriends}
            />
        </div>
    );
};

export default FriendsPage;
