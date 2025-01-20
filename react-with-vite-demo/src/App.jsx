import { useState } from "react";
import ActivityForm from "./components/ActivityForm";
//import PropTypes from "prop-types";
import ActivityList from "./components/Activitylist";
import "./index.css";

//håller state för aktiviteter och lägger till aktiviteter genom att appenda till arrayen med en spread operator
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