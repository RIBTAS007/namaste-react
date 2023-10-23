import React from "react";
// import UserChild from "./UserChild";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    //   count: 0,
    //   count2: 1,
    };

    // console.log(this.props.name + "child constructor");
  }

  componentDidMount(){
    // console.log( this.props.name +  "child component did mount");
  }

  render() {
    // console.log(this.props.name +  "child render");
    const { name, loc } = this.props;
    // const { count, count2 } = this.state;
    return (
      <div className="user-card">
        {/* <UserChild/> */}
        {/* <h1>Count: {count}</h1> */}
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 +1,
            });
          }}
        >
          Count Increase
        </button> */}
        {/* <h1>Count2: {count2}</h1> */}
        
        <h2>Name: {name}</h2>
        <h3>Location: {loc}</h3>
        <h4>Contact: @ribtas007</h4>
      </div>
    );
  }
}

export default UserClass;
