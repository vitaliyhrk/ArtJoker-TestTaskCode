import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { storiesOf } from '@storybook/react';
import App from '../components/App';

storiesOf('App', module)
  .add('App', () => <MuiThemeProvider><App /></MuiThemeProvider>);
