import axios from "axios";

export const GetDataWithAxios = (props) => {
  const { url } = props;

  return axios(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.data)
    .then((data) => data)
    .catch((error) => {
      throw error;
    });
};
