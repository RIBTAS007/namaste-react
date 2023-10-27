import React from "react";

class UserChild extends React.Component{

    constructor(props){
        super(props);

        console.log("child child constructor");
    }

    componentDidMount(){
        console.log("child child component did mount");
      }

    render(){
        console.log("child child render");
        return(
            <h1>Hello</h1>
        );
    }
};

export default UserChild;