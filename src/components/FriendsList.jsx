import React from "react";

const FriendsList = ({ friends }) => {
    return (
        <div className="FriendsList">
            <div className="test">
                {friends.length > 0 ? (
                    friends.map((friend) => (
                        <div className="Friends-List" key={friend.id}>
                            <img src={friend.image} alt={`${friend.firstName} ${friend.lastName}`} />
                            <p>
                                {friend.firstName} {friend.lastName}
                            </p>
                        </div>
                    ))
                ) : (
                    <p>No friends to display</p>
                )}
            </div>
        </div>
    );
};

export default FriendsList;
