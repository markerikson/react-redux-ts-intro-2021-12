import React from "react";

// Class components use ES6 class syntax
// Function components are now considered standard
class ClassComponent extends React.Component {
  render() {
    return <div> Hello World!</div>;
  }
}

// In React <= 15, this was available as
// React.createClass(). It's now a separate package,
// but deprecated and should not be used
import createReactClass from "create-react-class";

const CreateClassComponent = createReactClass({
  render: function () {
    return <div> Hello World!</div>;
  },
});
