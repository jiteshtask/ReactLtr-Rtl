import React, { Component, Suspense, useState } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import './Style.css';

// use hoc for class based components
class LegacyWelcomeClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: "ltr"
    }
  }
  theme = createMuiTheme({
    direction: 'rtl', // Both here and <body dir="rtl">
  });

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
    const { t, i18n, dir } = this.props;
    return (
      <MuiThemeProvider theme={this.theme}>

        <div dir={dir}>
          <div className="container">
            <form id="contact" action method="post">
              <h3>{t('heading')}</h3>
              <h4>{t('contact')}</h4>
              <fieldset>
                <input placeholder={t('name')} type="text" tabIndex={1} required autofocus />
              </fieldset>
              <fieldset>
                <input placeholder={t('email')} type="email" tabIndex={2} required />
              </fieldset>
              <fieldset>
                <input placeholder={'phone'} type="tel" tabIndex={3} required />
              </fieldset>
              <fieldset>
                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">{t('submit')}</button>
              </fieldset>
            </form>
          </div>

        </div>
      </MuiThemeProvider>
    );
  }
}
const Welcome = withTranslation()(LegacyWelcomeClass);

function Page() {
  const { t, i18n } = useTranslation();
  let [dir, handleDir] = useState("ltr");

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    if (lng == "en") {
      handleDir("ltr")
    }
    else {
      handleDir("rtl")
    }
  };

  return (
    <div className="App">
      <div className="App-header">
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('es')}>Arabic</button>
        <Welcome dir={dir} />
      </div>
    </div>
  );
}

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

// here app catches the suspense from page in case translations are not yet loaded
export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
}

