import { useNavigate } from "react-router-dom";
import styles from "./boReviewList.module.css";
const BoReviewList = ({ reviews, deleteReview }) => {
  const navigate = useNavigate();

  const editReview = (id) => {
    navigate(`/backoffice/reviews/edit/${id}`);
  };

  const createReview = () => {
    navigate(`/backoffice/reviews/add`);
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
                  <button onClick={() => deleteReview(_id)}>SLET</button>
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
