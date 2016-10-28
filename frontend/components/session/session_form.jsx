import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        password: ""
    };
  }

  componentWillMount(){
    if (this.props.loggedIn) this.props.router.replace("/#/");
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    debugger;
    this.props.processForm({user});
  }

  displayErrors(){
    return (
      <ul>
        {this.props.errors.map(error => <li>{error}</li>)}
      </ul>
    );
  }

  update(e, property){
    this.setState({[property]: e.target.value});
  }

  oppositePath(){
    if(window.location.pathname === "/#/signup"){
      return "/#/login";
    } else { return "/#/signup"; }
  }

  render(){
    return (
      <div>
        {this.displayErrors()}
        <h1>{this.props.formType}</h1>

        <label htmlFor="username">Username</label>
        <input type="text"
            id="username"
            onChange={e => this.update(e, "username")}>
        </input>

        <label htmlFor="password">Password</label>
        <input type="password"
          id="password"
          onChange={ e => this.update(e, "password") }>
        </input>
        <button onClick={ e => this.handleSubmit(e) }>Submit</button>
        <Link to={this.oppositePath()}></Link>
      </div>
    );
  }
}

export default withRouter(SessionForm);
