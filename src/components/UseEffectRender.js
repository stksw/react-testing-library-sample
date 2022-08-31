import React, { useEffect } from "react";
import axios from "axios";

const UseEffectRender = () => {
  const [user, setUser] = React.useState(null);

  useEffect(() => {
    (async function () {
      const endpoint = "https://jsonplaceholder.typicode.com/users/1";
      const res = await axios.get(endpoint);
      setUser(res.data);
    })();
  }, []);

  return (
    <div>
      {user ? (
        <p>
          I am {user.username} : {user.email}
        </p>
      ) : null}
    </div>
  );
};

export default UseEffectRender;
