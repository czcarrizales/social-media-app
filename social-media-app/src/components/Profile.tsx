import React, { useState, useReducer } from "react";
import "../styles/Profile.css";
import ProfileDislike from "./ProfileDislike";
import ProfileLike from "./ProfileLike";

interface Props {
  userData: any;
  dispatchUserData: any;
}

const Profile = ({ userData, dispatchUserData }: Props) => {
  const [editingName, setEditingName] = useState(false);
  const [nameEdit, setNameEdit] = useState(userData.name);
  const [addingLike, setAddingLike] = useState(false);
  const [likeInput, setLikeInput] = useState("");
  const [addingDislike, setAddingDislike] = useState(false);
  const [dislikeInput, setDislikeInput] = useState("");

  function handleNameEdit(e: any) {
    setNameEdit(e.target.value);
  }

  function submitNameEdit() {
    dispatchUserData({ type: "setName", payload: nameEdit });
    setEditingName(false);
  }

  function addLike() {
    dispatchUserData({ type: "addLike", payload: likeInput });
    setLikeInput("");
    setAddingLike(false);
  }

  function addDislike() {
    dispatchUserData({ type: "addDislike", payload: dislikeInput });
    setDislikeInput("");
    setAddingDislike(false);
  }

  return (
    <div className="profile-container">
      <div className="profile-image-container">
        <img className="profile-picture" src={userData.image} alt="image of current user" />
        {editingName ? (
          <div>
            <input value={nameEdit} onChange={(e) => handleNameEdit(e)}></input>
            <button onClick={submitNameEdit}>Submit Name</button>
          </div>
        ) : (
          <h1>{userData.name}</h1>
        )}
        <button className="edit-name-button" onClick={() => setEditingName(true)}>
          edit
        </button>
      </div>
      <div className="profile-details">
        <div className="profile-about">
          <h2>About Me</h2>
          <div>
            <p>This is a section that is about me. I am currently just testing this out to see how it will look. Yadda yadda yadda. Woot woot.</p>
          </div>
        </div>
        <div className="profile-likes">
          <h2>Likes</h2>
          {addingLike ? (
            <div>
              <input
                type="text"
                value={likeInput}
                onChange={(e) => setLikeInput(e.target.value)}
              />
              <button onClick={addLike}>add like</button>
            </div>
          ) : (
            <button className="add-button" onClick={() => setAddingLike(true)}>
              +
            </button>
          )}
          {userData.likes.map((like: any, index: number) => {
            return (
              <div className="all-likes">
                <ProfileLike
                  like={like}
                  index={index}
                  dispatchUserData={dispatchUserData}
                />
              </div>
            );
          })}
        </div>
        <div className="profile-dislikes">
          <h2>Dislikes</h2>
          {addingDislike ? (
            <div>
              <input
                type="text"
                value={dislikeInput}
                onChange={(e) => setDislikeInput(e.target.value)}
              />
              <button onClick={addDislike}>add dislike</button>
            </div>
          ) : (
            <button
              className="add-button"
              onClick={() => setAddingDislike(true)}
            >
              +
            </button>
          )}
          {userData.dislikes.map((dislike: any, index: number) => {
            return (
              <div className="all-dislikes">
                <ProfileDislike
                  dislike={dislike}
                  index={index}
                  dispatchUserData={dispatchUserData}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
