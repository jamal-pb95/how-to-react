import React from 'react';

export const Comment = (props) => {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <UserInfo user={props.author} />
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
    </div>
  );
}

// Avatar component
const Avatar = props => {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

// User component
const UserInfo = props => {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}