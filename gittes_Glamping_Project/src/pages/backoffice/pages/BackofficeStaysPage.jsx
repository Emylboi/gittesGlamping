import { useEffect, useState } from "react";
import useTinyFetch from "../../../hooks/tinyFetch.hook";
import { Outlet, useNavigate } from "react-router-dom";
import BoStayList from "../../../components/backoffice/Stays/lists/BoStayList";
import useAuth from "../../../hooks/useAuth";

const BackofficeStaysPage = () => {
  const [stays, setStays] = useState([]);
  const { data, fetchData } = useTinyFetch();
  const navigate = useNavigate();
  const { token } = useAuth();

  const headers = {
    "Authorization": `Bearer ${token}`, // Include token in Authorization header
  };
  
  useEffect(() => {
    fetchData("/stays");
  }, []);

  useEffect(() => {
    setStays(data);
  }, [data]);

  const addStay = (formData) => {
    const addNewStay = async (formData) => {
      let response = await fetch("http://localhost:3042/stay", {
        method: "POST",
        body: formData,
        headers,
      });

      if (response.ok) {
        fetchData("/stays");
        navigate(`/backoffice/stays`);
      }
    };

    addNewStay(formData);
  };

  const deleteStay = (id) => {
    const delStay = async () => {
      console.log("test console");
      await fetch(`http://localhost:3042/stay/${id}`, {
        method: "DELETE",
        headers,
      });

      fetchData("/stays");
    };

    delStay(id);
  };

  const updateStay = (formData) => {
    const editStay = async (formData) => {
      let response = await fetch("http://localhost:3042/stay", {
        method: "PUT",
        body: formData,
        headers,
      });

      const res = await response.json();
      if ((res.status = "ok")) {
        fetchData("/stays");
        navigate(`/backoffice/stays`);
      }
    };

    editStay(formData);
  };

  return (
    <div>
      <BoStayList stays={stays} deleteStay={deleteStay}></BoStayList>
      <br />
      <br />
      <Outlet context={[stays, addStay, updateStay]}></Outlet>
    </div>
  );
};
export default BackofficeStaysPage;
