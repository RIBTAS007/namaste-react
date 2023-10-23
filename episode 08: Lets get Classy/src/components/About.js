import {Component} from 'react';
import User from './User';
import UserClass from './UserClass';

class About extends Component{

  constructor(props) {
    super(props);

    // this.state = {
    //   count: 0,
    //   count2: 1,
    // };

    console.log("parent constructor");
  }

  componentDidMount(){
    console.log("parent component did mount");
  }

  render(){
    console.log("child render");
    return (
      <div><h1>About Us</h1>
      <User name={"Satbir(function)"}/>
      <UserClass name={"Satbir(class)"} loc={"hyderabad class"}/>
      <UserClass name={"Satbir2(class)"} loc={"hyderabad class"}/>
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div><h1>About Us</h1>
//     <User name={"Satbir(function)"}/>
//     <UserClass name={"Satbir(class)"} loc={"hyderabad class"}/>
//     </div>
//   )
// }

export default About;