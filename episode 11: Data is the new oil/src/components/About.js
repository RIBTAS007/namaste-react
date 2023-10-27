import {Component} from 'react';
import UserClass from './UserClass';
import UserContext from '../utils/UserContext';

class About extends Component{

  constructor(props) {
    super(props);
  }

  componentDidMount(){
  }

  render(){
    console.log("child render");
    return (
      <div><h1>About Us</h1>
      <div>
        LoggedIn User
        <UserContext.Consumer>
          {({loggedInUser}) => <h1 className='text-xl font-bold'>{loggedInUser}</h1>}
        </UserContext.Consumer>
      </div>
      <UserClass name={"Satbir(class)"} loc={"hyderabad class"}/>
      </div>
    );
  }
}

export default About;