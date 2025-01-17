import React, { useState } from "react";
import ActivityForm from "./components/ActivityForm";
import PropTypes from "prop-types";
import ActivityList from "./components/ActivityList";
import "./index.css";

const App = () => {
  const [activities, setActivities] = useState([]);

  const addActivity = (activity) => {
    setActivities((prevActivities) => [...prevActivities, activity]);
  };

  return (
    <div className="app">
      <ActivityForm onAddActivity={addActivity} />
      <ActivityList activities={activities} />
    </div>
  );
};

export default App;