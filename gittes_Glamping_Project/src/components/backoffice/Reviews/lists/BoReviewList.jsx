import { useNavigate } from "react-router-dom";
import styles from "./boReviewList.module.css";
import Swal from "sweetalert2";

const BoReviewList = ({ reviews, deleteReview }) => {
  const navigate = useNavigate();

  const editReview = (id) => {
    navigate(`/backoffice/reviews/edit/${id}`);
  };

  const createReview = () => {
    navigate(`/backoffice/reviews/add`);
  };

const handleDelete = (id, name) => {
    Swal.fire({
      title: `Vil du slette reviewet fra "${name}"?`,
      text: "Denne handling kan ikke fortrydes!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ja, slet reviewet!",
      cancelButtonText: "Annuller",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteReview(id);
        Swal.fire("Slettet!", "Reviewet er blevet slettet.", "success");
      }
    });
  };

  return (
    <div className={styles.list}>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
            <th>review</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((areview) => {
            let { _id, name, age, review} = areview;

            return (
              <tr key={_id}>
                <td>{name}</td>
                <td>{age}</td>
                <td>{review}</td>
                <td className={"table-actions"}>
                  <button onClick={() => editReview(_id)}>REDIGÈR</button>
                  <button onClick={() => handleDelete(_id, name)}>SLET</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={createReview}>OPRET</button>
    </div>
  );
};
export default BoReviewList;
