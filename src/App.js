import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Style from './Style.css';

const theme = createMuiTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
});



class Direction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: "ltr"
    }
  }
  changeOption = e => {
    const value = e.target.value;

    if (value === "LTR") {
      this.setState({ direction: "ltr" })
    }
    else {
      this.setState({ direction: "rtl" })
    }
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>

        <div dir={this.state.direction}>
          <select className="drop" name="dropdown" onChange={this.changeOption}>
            <option value="LTR" selected>LTR</option>
            <option value="RTR">RTR</option>
          </select>
          <div className="container">
            <form id="contact" action method="post">
              <h3>React LTR/RTR Support </h3>
              <h4>Contact us </h4>
              <fieldset>
                <input placeholder="Your name" type="text" tabIndex={1} required autofocus />
              </fieldset>
              <fieldset>
                <input placeholder="Your Email Address" type="email" tabIndex={2} required />
              </fieldset>
              <fieldset>
                <input placeholder="Your Phone Number" type="tel" tabIndex={3} required />
              </fieldset>
              <fieldset>
                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
              </fieldset>
            </form>
          </div>

        </div>
      </MuiThemeProvider>
    );
  }
}

export default Direction;
