import React from 'react';
import ReactDOM from 'react-dom';
import {UIRouter, UIView, UISref, UISrefActive, pushStateLocationPlugin} from 'ui-router-react';

// import './index.css';

import Configuration from './Configuration';

import registerServiceWorker from './registerServiceWorker';

const Login = () => <h3>Login</h3>;
const Signup = () => <h3>Signup</h3>;
const List = () => <h3>List</h3>;
const Detail = () => <h3>Detail</h3>;
const ConfigurationComponent = () => <Configuration />

let loginState = { name: 'login', url: '/login',  component: Login };
let signupState = { name: 'signup', url: '/signup',  component: Signup };
let listState = { name: 'list', url: '/list',  component: List };
let detailState = { name: 'detail', url: '/detail',  component: Detail };
let configurationState = { name: 'configuration', url: '/configuration',  component: ConfigurationComponent };

ReactDOM.render(
  <UIRouter plugins={[pushStateLocationPlugin]} states={[
    loginState,
    signupState,
    listState,
    detailState,
    configurationState,
  ]}>
    <div>
      <UISrefActive class="active">
        <UISref to="login"><a>Login</a></UISref>
      </UISrefActive>{' '}
      <UISrefActive class="active">
        <UISref to="signup"><a>Signup</a></UISref>
      </UISrefActive>{' '}
      <UISrefActive class="active">
        <UISref to="list"><a>List</a></UISref>
      </UISrefActive>{' '}
      <UISrefActive class="active">
        <UISref to="detail"><a>Detail</a></UISref>
      </UISrefActive>{' '}
      <UISrefActive class="active">
        <UISref to="configuration"><a>Configuration</a></UISref>
      </UISrefActive>{' '}
      <UIView/>
    </div>
  </UIRouter>, document.getElementById('root')
);

registerServiceWorker();
