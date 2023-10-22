import React from "react";

class UserClass extends React.Component {
constructor(props){
    super(props);

    console.log(props);
}
  render() {
    const {name, loc} = this.props;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {loc}</h3>
        <h4>Contact: @ribtas007</h4>
      </div>
    );
  }
}

export default UserClass;
