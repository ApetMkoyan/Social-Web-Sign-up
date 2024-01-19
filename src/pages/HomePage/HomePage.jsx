import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { sendRequest } from "../../hook/useSendRequest";
import phone from "../../utilities/svg/Phone.svg";
import email from "../../utilities/svg/Email.svg";
import location from "../../utilities/svg/Location.svg";
import NavMenu from "../../NavMenu/NavMenu";
import Loading from "../../components/Loading/Loading";

import "./HomePage.css";
import UserInfo from "../../components/UserInfo";

const HomePage = () => {
  const [user, setUser] = useState({});
  const [isEditMode, setIsEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { get, put } = sendRequest();
  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const userResponse = await get(`http://localhost:5000/users/${id}`);
      setUser(userResponse);
      setCurrentUserId(userResponse.id);
      setTimeout(() => setLoading(false), 2400);
    }

    fetchData();
  }, [id]);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const handleInputChange = (e, field) => {
    if (field.startsWith("about.")) {
      const aboutField = field.split(".")[1];
      setUser((prevUser) => ({
        ...prevUser,
        about: {
          ...prevUser.about,
          [aboutField]: e.target.value,
        },
      }));
    } else {
      setUser((prevUser) => ({ ...prevUser, [field]: e.target.value }));
    }
  };

  const handleUpdate = async () => {
    const response = await put(`http://localhost:5000/users/${id}`, user);
    toggleEditMode();

  };
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="HomePage">
      <NavMenu onToggleEditMode={toggleEditMode} currentUserId={currentUserId} />
      <UserInfo user={user} />
      <div className="aboutUser">
        {isEditMode && <button className="save" onClick={handleUpdate}>Save</button>}
        <h5>ABOUT ME</h5>
        <hr />
        {isEditMode ? (
          <input
            type="text"
            value={user?.about?.aboutt}
            onChange={(e) => handleInputChange(e, "about.aboutt")}
          />
        ) : (
          <span className="about">{user?.about?.aboutt}</span>
        )}
        <span className="information">
          <p className="do">What I Do!</p>
          <div className="firstinfo">
            {isEditMode ? (
              <input
                type="text"
                value={user?.about?.firstinfo}
                onChange={(e) => handleInputChange(e, "about.firstinfo")}
              />
            ) : (
              user?.about?.firstinfo
            )}
          </div>
          <div className="Secondinfo">
            {isEditMode ? (
              <input
                type="text"
                value={user?.about?.Secondinfo}
                onChange={(e) => handleInputChange(e, "about.Secondinfo")}
              />
            ) : (
              user?.about?.Secondinfo
            )}
          </div>
          <div className="Thirdinfo">
            {isEditMode ? (
              <input
                type="text"
                value={user?.about?.Thirdinfo}
                onChange={(e) => handleInputChange(e, "about.Thirdinfo")}
              />
            ) : (
              user?.about?.Thirdinfo
            )}
          </div>
        </span>
      </div>
    </div>
  );
};

export default HomePage;
