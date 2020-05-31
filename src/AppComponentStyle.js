//import React, { Component } from "react";
import React, { Component } from "react";

class AppComponentStyle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoading: true,
    };

    this.FetchData = function (url, options) {
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          const timer = setTimeout(() => {
            this.setState({
              isLoading: false,
              items: json,
            });
            clearTimeout(timer);
          }, 3000);
        });
    };
  }

  componentDidMount() {
    this.FetchData("https://jsonplaceholder.typicode.com/users", {});
  }

  render() {
    var { isLoading, items } = this.state;
    if (isLoading) {
      return <div>Component style --> Loading...</div>;
    } else {
      return (
        <div className="AppComponentStyle">
          <div>Done!</div>;
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.name}
                <span>--></span>
                {item.email}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default AppComponentStyle;
