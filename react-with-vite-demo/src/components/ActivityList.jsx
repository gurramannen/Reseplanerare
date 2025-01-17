import React from "react";
import PropTypes from "prop-types";
import "../styles/ActivityList.css";

const ActivityList = ({ activities }) => {
  return (
    <div className="activity-list">
      <h2>Aktivitetslista</h2>
      {activities.length === 0 ? (
        <p>Inga aktiviteter tillagda ännu.</p>
      ) : (
        <ul>
          {activities.map((activity, index) => (
            <li key={index}>
              <strong>{activity.name}</strong> - {activity.date} - {activity.location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ActivityList;