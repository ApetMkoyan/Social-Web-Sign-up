import React from "react";
import { BsFillPersonPlusFill, BsFillPersonXFill } from "react-icons/bs";

const RecommendedFriendsList = ({ users, friends, addToFriends }) => {
    return (
        <div className="AddFriendsList">
            <div className="test1">
                {users.map((friend) => (
                    <div className="Recomendet-List" key={friend.id}>
                        <img src={friend.image} alt={`${friend.firstName} ${friend.lastName}`} />
                        <p>
                            {friend.firstName} {friend.lastName}
                        </p>
                        <button className="AddetFriend" onClick={() => addToFriends(friend)}>
                            {friends.some((existingUser) => existingUser.id === friend.id) ? (
                                <BsFillPersonXFill className="red" />
                            ) : (
                                <BsFillPersonPlusFill className="green" />
                            )}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecommendedFriendsList;
