import React, { Component } from 'react';
/**
 * LoginForm class
 *
 * Component to create a form which allows a user to login with their username and password
 */
class LoginForm extends Component {
   constructor(props) {
      super(props);
      this.state = {
         loginMsg: 'Log In',
         username: '',
         password: '',
      };
   }

   render() {
      const { username, password } = this.state;

      return (
         <div className='centerScreen'>
            <form className='loginForm'>
               <h3 style={this.state.loginMsgStyle}>{this.state.loginMsg}</h3>
               <input
                  type='text'
                  className='textInput'
                  placeholder='username'
                  value={username}
                  onChange={this.handleUsernameChange}
                  autoComplete='off'
                  required
               />
               <input
                  type='password'
                  className='textInput'
                  placeholder='password'
                  value={password}
                  onChange={this.handlePasswordChange}
                  autoComplete='off'
                  required
               />
               <button className='buttonInput' onClick={this.signIn}>
                  Sign In
               </button>
               <button className='buttonInput' onClick={this.clearForm}>
                  Clear
               </button>
               <a href='/'>Reset Password</a>
            </form>
         </div>
      );
   }

   /**
    * Event handlers that update the component's state whenever the
    * values in the input fields change.
    *
    */
   handleUsernameChange = e => {
      this.setState({ username: e.target.value });
   };
   handlePasswordChange = e => {
      this.setState({ password: e.target.value });
   };

   /**
    * The signIn method is an event handler for the sign in button click event.
    *
    * It checks if both the username and password fields are empty.
    * If either of them is empty, it displays an error message by updating the loginMsg and loginMsgStyle state values.
    * After 4 seconds, the error message is reset to the default value.
    *
    * If both the username and password fields have values, it updates the loginMsg state value to indicate that the user is being logged in.
    * After 2 seconds, it updates the loginMsg state value again to display a welcome message with the username.
    */
   signIn = e => {
      e.preventDefault();
      const { username, password } = this.state;
      if (username === '' || password === '') {
         const italicStyle = {
            fontStyle: 'italic',
            color: 'darkorange',
            fontSize: 'smaller',
         };
         this.setState({
            loginMsgStyle: italicStyle,
            loginMsg: 'Username and Password are required!',
         });
         setTimeout(() => {
            this.setState({ loginMsgStyle: {}, loginMsg: 'Log In' });
         }, 4000);
      } else {
         console.log(
            `${username} has successfully logged in with the password ${password}`
         );
         this.setState({ loginMsg: 'Logging In...' });
         setTimeout(() => {
            this.setState({ loginMsg: `Welcome ${username}!` });
         }, 2000);
      }
   };

   /**
    * The clearForm method is an event handler for the clear button click event.
    * It resets the username, password, and loginMsg state values to their initial values.
    *
    */
   clearForm = e => {
      e.preventDefault();
      this.setState({ username: '', password: '', loginMsg: 'Log In' });
      console.log('Clear form clicked!');
   };
}

export default LoginForm;
