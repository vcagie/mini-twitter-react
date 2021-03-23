import { useEffect, useState } from "react";

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    sessionStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
  };

//   useEffect(() => {
//     async function fetchData() {
//       const request = await axios.get(tweetRequests);
//       setTweets(request.data);
//       return request;
//     }
//     fetchData();
//   }, []);

  return {
    setToken: saveToken,
    token,
  };
}
