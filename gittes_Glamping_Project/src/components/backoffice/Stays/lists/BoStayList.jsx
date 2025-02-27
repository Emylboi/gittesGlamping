import { useNavigate } from "react-router-dom";
import styles from "./boStayList.module.css";
import Swal from "sweetalert2";

/* This component shows the list of all our stays in the backoffice section. */
const BoStayList = ({ stays, deleteStay }) => {
  const navigate = useNavigate();

  const editStay = (id) => {
    navigate(`/backoffice/stays/edit/${id}`);
  };

  const createStay = () => {
    navigate(`/backoffice/stays/add`);
  };

  const handleDelete = (id, title) => {
      Swal.fire({
        title: `Vil du slette opholdet "${title}"?`,
        text: "Denne handling kan ikke fortrydes!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ja, slet opholdet!",
        cancelButtonText: "Annuller",
      }).then((result) => {
        if (result.isConfirmed) {
          deleteStay(id);
          Swal.fire("Slettet!", "Dit ophold er blevet slettet.", "success");
        }
      });
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
              image,
              price,
              includes
            } = stay;

            /* lists the information of each stay in the backoffice section, based on id's */
            return (
              <tr key={_id}>
                <td>
                  <img src={image}></img>
                </td>
                <td>{title}</td>
                <td>{description}</td>
                <td>{numberOfPersons}</td>
                <td>{price}</td>
                <td>{includes}</td>
                <td className={"table-actions"}>
                  <button onClick={() => editStay(_id)}>REDIGÈR</button>
                  <button onClick={() => handleDelete(_id, title)}>SLET</button>
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
