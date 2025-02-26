import { useEffect, useState } from "react";
import useTinyFetch from "../../../hooks/tinyFetch.hook";
import { Outlet, useNavigate } from "react-router-dom";
import BoActivityList from "../../../components/backoffice/Activities/lists/BoActivityList";
import useAuth from "../../../hooks/useAuth";

const BackofficeActivitiesPage = () => {
  const [activities, setActivities] = useState([]); // State for activities, empty array as default.
  const { data, fetchData } = useTinyFetch(); // Fetch data from the API server.
  const navigate = useNavigate();
  const { token } = useAuth(); // Get token from useAuth hook.

  const headers = {
    Authorization: `Bearer ${token}`, // Include token in Authorization header
  };

  useEffect(() => {
    fetchData("/activities"); //Fetches activities from the /activities endpoint.
  }, []);

  useEffect(() => {
    setActivities(data); // Sets the activities to the data we get from the endpoint API.
  }, [data]);

  // Function that adds a new activity to the database.
  const addActivity = (formData) => {
    const addNewActivity = async (formData) => {
      let response = await fetch("http://localhost:3042/activity", {
        // Fetches the data from the API server with the /activity endpoint.
        method: "POST", // Method is POST, because we are posting data to the server.
        body: formData, // We are posting data from a form.
        headers,
      });

      // If the response is ok, we fetch the data again, and navigate to the /backoffice/activities page.
      if (response.ok) {
        fetchData("/activities");
        navigate(`/backoffice/activities`);
      }
    };

    addNewActivity(formData);
  };

  // Function that deletes an activity from the database.
  const deleteActivity = (id) => {
    const delActivity = async () => {
      // Fetches the data from the API server with the /activity/:id endpoint.
      await fetch(`http://localhost:3042/activity/${id}`, {
        method: "DELETE", // Method is DELETE, because we are deleting data from the server.
        headers,
      });

      fetchData("/activities"); // Fetches the data again, to update the list of activities.
    };

    delActivity(id);
  };

  // Function that updates an activity in the database.
  const updateActivity = (formData) => {
    const editActivity = async (formData) => {
      let response = await fetch("http://localhost:3042/activity", {
        // Fetches the data from the API server with the /activity endpoint.
        method: "PUT", // Method is PUT, because we are updating data in the server.
        body: formData, // We are updating data from a form.
        headers,
      });

      const res = await response.json();
      // If the response is ok, we fetch the data again, and navigate to the /backoffice/activities page.
      if ((res.status = "ok")) {
        fetchData("/activities");
        navigate(`/backoffice/activities`);
      }
    };

    editActivity(formData);
  };

  return (
    <div>
      <BoActivityList
        activities={activities}
        deleteActivity={deleteActivity}
      ></BoActivityList>
      <br />
      <br />
      <Outlet context={[activities, addActivity, updateActivity]}></Outlet>
    </div>
  );
};
export default BackofficeActivitiesPage;
