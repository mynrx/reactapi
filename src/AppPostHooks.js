import React, { useState } from "react";

const url = "https://enrikjsuant4g.x.pipedream.net/sample/post/request/";

const _postData = {
  name: "Deneme hooks",
};

const options = {
  method: "post",
  mode: "cors",
  headers: new Headers({
    Accept: "application/json",
    "Content-type": "application/json",
  }),
  body: JSON.stringify(_postData),
};

const AppHooksPost = () => {
  const [isLoading, setLoading] = useState(true);
  const [post, setPost] = useState([]);
  const [error, setError] = useState(null);

  const getData = async () => {
      await fetch(url, options)
      .then((response) => {
        setPost(response);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
    return { post, isLoading, error };
  };

  return (
    <div className="App">
      <button className="App-Button" onClick={() => getData()}>
        Post data using hooks...
      </button> {isLoading} - {post.status}
    </div>
  );
};

export default AppHooksPost;
