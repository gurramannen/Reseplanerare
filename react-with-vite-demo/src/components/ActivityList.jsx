import PropTypes from "prop-types";
import "../styles/ActivityList.css";

//returenerar en lista med aktiviteter, i en array
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

//validerar att activities är en array med objekt som har name, date och location
ActivityList.propTypes = {
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ActivityList;