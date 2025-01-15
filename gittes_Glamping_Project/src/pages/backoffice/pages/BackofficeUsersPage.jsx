import { useEffect, useState } from "react";
import useTinyFetch from "../../../hooks/tinyFetch.hook";
import { Outlet, useNavigate } from "react-router-dom";
import BoUserList from "../../../components/backoffice/Users/lists/BoUserList";

const BackofficeUsersPage = () => {
  const [users, setUsers] = useState([]);
  const { data, fetchData } = useTinyFetch();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData("/users");
  }, []);

  useEffect(() => {
    setUsers(data);
  }, [data]);

  const addUser = (formData) => {
    const addNewUser = async (formData) => {
      let response = await fetch("http://localhost:3042/user", {
        method: "POST",
        body: formData,
      });
      /*       const result = await response.json(); */
      if (response.ok) {
        fetchData("/users");
        navigate(`/backoffice/users`);
      }
    };

    addNewUser(formData);
  };

  const deleteUser = (id) => {
    const delUser = async () => {
      await fetch(`http://localhost:3042/user/${id}`, {
        method: "DELETE",
      });

      fetchData("/users");
    };

    delUser(id);
  };

  const updateUser = (formData) => {
    const editUser = async (formData) => {
      let response = await fetch("http://localhost:3042/user", {
        method: "PUT",
        body: formData,
      });

      /*  const res = await response.json(); */
      if (response.ok) {
        fetchData("/users");
        navigate(`/backoffice/users`);
      }
    };

    editUser(formData);
  };

  return (
    <div>
      <BoUserList users={users} deleteUser={deleteUser}></BoUserList>
      <br />
      <br />
      <Outlet context={[users, addUser, updateUser]}></Outlet>
    </div>
  );
};
export default BackofficeUsersPage;
