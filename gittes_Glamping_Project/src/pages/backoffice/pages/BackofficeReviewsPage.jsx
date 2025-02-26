import { useEffect, useState } from "react";
import useTinyFetch from "../../../hooks/tinyFetch.hook";
import { Outlet, useNavigate } from "react-router-dom";
import BoReviewList from "../../../components/backoffice/Reviews/lists/BoReviewList";
import useAuth from "../../../hooks/useAuth";

const BackofficeReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const { data, fetchData } = useTinyFetch();
  const navigate = useNavigate();
  const { token } = useAuth();

  const headers = {
    "Authorization": `Bearer ${token}`, // Include token in Authorization header
  };

  useEffect(() => {
    fetchData("/reviews");
  }, []);

  useEffect(() => {
    setReviews(data);
  }, [data]);

  const addReview = (formData) => {
    const addNewReview = async (formData) => {
      let response = await fetch("http://localhost:3042/review", {
        method: "POST",
        body: formData,
        headers,
      });
      
      if ((response.ok)) {
        fetchData("/reviews");
        navigate(`/backoffice/reviews`);
      }
    };

    addNewReview(formData);
  };

  const deleteReview = (id) => {
    const delReview = async () => {
      await fetch(`http://localhost:3042/review/${id}`, {
        method: "DELETE",
        headers,
      });

      fetchData("/reviews")
    };

    delReview(id);
  };

  const updateReview = (formData) => {
    const editReview = async (formData) => {
      let response = await fetch("http://localhost:3042/review", {
        method: "PUT",
        body: formData,
        headers,
      });

      const res = await response.json();
      if ((res.status = "ok")) {
        fetchData("/reviews");
        navigate(`/backoffice/reviews`);
      }
    };

    editReview(formData);
  };

  return (
    <div>
      <BoReviewList reviews={reviews} deleteReview={deleteReview}></BoReviewList>
      <br />
      <br />
      <Outlet context={[reviews, addReview, updateReview]}></Outlet>
    </div>
  );
};
export default BackofficeReviewsPage;
