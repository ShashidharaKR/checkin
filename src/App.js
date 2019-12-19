import React, { Component } from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  submit = () => {
    if (this.state.username == '' || this.state.password == '') {
      alert("Please Enter Values");
      //alert(this.state.username + "  " + this.state.password);
    } else {

      const serverport = JSON.stringify({
        user_name: this.state.username,
        user_password: this.state.password
      });
      //alert(serverport);
      console.log(serverport);
      axios('https://obaba.shop/obaba_shop_api/index.php/UserLogin_c/userLogin', {
        method: 'POST',
        data: serverport,
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          // console.log(JSON.stringify(response.data));
          // console.log("Status Response : " + JSON.stringify(response.data.status));
          if (response.data.status) {
            alert("Logged In");
          } else {
            alert("Invalid Credentials");
          }
        })
        .catch((error) => {
          alert(error)
        })
    }
  }

  render() {
    return (
      <div >
        <div className="App">
          <div className="App-header">
            <img src={'https://obabaerp.files.wordpress.com/2018/06/cropped-orignal-logo-copy-2.png?w=240'} className="App-logo" alt="logo" />
            <h2 className="text">Obaba-CheckIn</h2>
          </div>
        </div>
        <form>
          <div className="Apps">
            <Card raised className="cards">
              <CardContent>
                <TextField
                  id="outlined-password-input"
                  label="Username"
                  className="textField"
                  type="name"
                  onChange={event => this.setState({ username: event.target.value })}
                  value={this.state.username}
                  autoComplete="current-password"
                  margin="normal"
                  variant="outlined"></TextField>
                <Typography variant="h5" component="h2">
                  <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    onChange={event => this.setState({ password: event.target.value })}
                    value={this.state.password}
                    autoComplete="current-name"
                    margin="normal"
                    variant="outlined"></TextField>
                </Typography>
                <Button onClick={(e) => this.submit(e)} variant="contained" color="secondary" >
                  Login
             </Button>
              </CardContent>
            </Card>
          </div>
        </form>
        <div className="copyright">
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
              https://www.obaba.in/
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </div>
      </div>
    );
  }
}

export default App;
