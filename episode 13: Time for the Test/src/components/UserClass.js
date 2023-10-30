import React from "react";
// import UserChild from "./UserChild";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    //   count: 0,
    //   count2: 1,
    userInfo:{
        name: "Dummy",
        location: "default",
    }
    };

    // console.log(this.props.name + "child constructor");
  }

  async componentDidMount(){
    // console.log( this.props.name +  "child component did mount");
    const data = await fetch("https://api.github.com/users/ribtas007");
    const json = await data.json();

    this.setState({
        userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate(){
    console.log("component did update");
  }

  componentWillUnmount(){
    console.log("component unmounted");
  }

  render() {
    // console.log(this.props.name +  "child render");
    const { name, location, avatar_url } = this.state.userInfo;
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
        <img src={avatar_url}/>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @ribtas007</h4>
      </div>
    );
  }
}

export default UserClass;
