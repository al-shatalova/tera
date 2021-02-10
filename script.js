'use strict';

class HelloMessage extends React.Component {
    render() {
      return React.createElement(
        "p",
        null,
        this.props.name
      );
    }
  }
  
  ReactDOM.render(
      React.createElement(
          HelloMessage, { name: "dfskjdfs" }),
          document.getElementById('hello-example')
      );