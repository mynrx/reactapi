import React, { Component } from "react";

class AppPostComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoading: true,
    };

    this.fetchOptions = {
      method: "post",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: "Deneme",
      }),
    };

    this.PostData = function (url, options) {
      try {
        let result = fetch(url, options)
          .then((res) => res.json())
          .then((json) => {
            this.setState({
              isLoading: false,
              items: json,
            });
          });
        console.log("Result: " + result);
      } catch (error) {
        console.log(error);
      }
    };
  }

  render() {
    return (
      <div className="App">
        <button
          className="App-Button"
          onClick={() =>
            this.PostData(
              "https://en0bfrs3qwlywf.x.pipedream.net/sample/post/request/",
              this.fetchOptions
            )
          }
        >
          Post data...
        </button>
      </div>
    );
  }
}

export default AppPostComponent;
