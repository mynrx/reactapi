//import React, { Component } from "react";
import React, { useEffect, useState } from "react";

const FetchData = (url, options) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    const getUsers = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        const timer = setTimeout(() => {
          setData(jsonData);
          setLoading(false);
          clearTimeout(timer);
        }, 3000);
      } catch (error) {
        setError(error);
      }
    };
    getUsers();
  }, []);
  return { data, isLoading, error };
};

function AppHooksStyle() {
  const resp = FetchData("https://jsonplaceholder.typicode.com/users", {});
  if (resp.isLoading || !resp.data) {
    return <div>Hooks style --> Loading...</div>;
  } else {
    return (
      <div className="App">
        <div>Done!</div>;
        <ul>
          {resp.data.map((item) => (
            <li key={item.id}>
              {item.name}
              <span>&nbsp;-->&nbsp;</span>
              {item.email}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AppHooksStyle;
