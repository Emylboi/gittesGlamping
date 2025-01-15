import { useNavigate } from "react-router-dom";
import styles from "./boStayList.module.css";
const BoStayList = ({ stays, deleteStay }) => {
  const navigate = useNavigate();

  const editStay = (id) => {
    navigate(`/backoffice/stays/edit/${id}`);
  };

  const createStay = () => {
    navigate(`/backoffice/stays/add`);
  };

  return (
    <div className={styles.list}>
      <table>
        <thead>
          <tr>
            <th>image</th>
            <th>title</th>
            <th>description</th>
            <th>persons</th>
            <th>price</th>
            <th>includes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stays.map((stay) => {
            let {
              _id,
              title,
              description,
              numberOfPersons,
              picture,
              price,
              includes
            } = stay;

            return (
              <tr key={_id}>
                <td>
                  <img src={picture}></img>
                </td>
                <td>{title}</td>
                <td>{description}</td>
                <td>{numberOfPersons}</td>
                <td>{price}</td>
                <td>{includes}</td>
                <td className={"table-actions"}>
                  <button onClick={() => editStay(_id)}>REDIGÈR</button>
                  <button onClick={() => deleteStay(_id)}>SLET</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={createStay}>OPRET</button>
    </div>
  );
};
export default BoStayList;
