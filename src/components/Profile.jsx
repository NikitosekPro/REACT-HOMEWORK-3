import React from "react";
import data from "../user.json";

export default function Profile(username, tag, location, avatar, stats) {
  return (
    <div className="profile">
      <div className="description">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
          className="avatar"
        />
        <p className="name">{data.username}</p>
        <p className="tag">@{data.tag}</p>
        <p className="location">{data.location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers </span>
          <span className="quantity">{data.stats.followers}</span>
        </li>
        <li>
          <span className="label">Views </span>
          <span className="quantity">{data.stats.views}</span>
        </li>
        <li>
          <span className="label">Likes </span>
          <span className="quantity">{data.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
