import { useState } from "react";

const useTinyFetch = () => {
  const [data, setData] = useState([]);

  const fetchData = async (url) => {
    const response = await fetch(`http://localhost:3042${url}`);
    const result = await response.json();
    setData(result.data);

    return result;
  };

  return {
    data,
    fetchData,
  };
};
export default useTinyFetch;
