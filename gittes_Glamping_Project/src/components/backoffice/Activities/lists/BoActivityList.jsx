import { useNavigate } from "react-router-dom";
import styles from "./boActivityList.module.css";

// This component shows the list of all our activities in the backoffice section.
const BoActivityList = ({ activities, deleteActivity }) => {
  const navigate = useNavigate();

  // Function that navigates to the edit/update page of the activity
  const editActivity = (id) => {
    navigate(`/backoffice/activities/edit/${id}`);
  };

  // Function that navigates to the add/create page of the activity
  const createActivity = () => {
    navigate(`/backoffice/activities/add`);
  };

  return (
    <div className={styles.list}>
      <table>
        <thead>
          <tr>
            <th>image</th>
            <th>title</th>
            <th>description</th>
            <th>date</th>
            <th>time</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => {
            let {
              _id,
              title,
              description,
              date,
              time,
              image,
            } = activity;

            // Lists the information of each activity in the backoffice section, based on id's
            return (
              <tr key={_id}>
                <td>
                  <img src={image}></img>
                </td>
                <td>{title}</td>
                <td>{description}</td>
                <td>{date}</td>
                <td>{time}</td>
                <td className={"table-actions"}>
                  <button onClick={() => editActivity(_id)}>REDIGÈR</button> {/* Clicking the button, runs the editActivity function above. */}
                  <button onClick={() => deleteActivity(_id)}>SLET</button> {/* Clicking the button, runs the deleteActivity function that we get as a prop from BackofficeActivitiesPage. */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={createActivity}>OPRET</button> {/* Clicking the button, runs the createActivity function above. */}
    </div>
  );
};
export default BoActivityList;
