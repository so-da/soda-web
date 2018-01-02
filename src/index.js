import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {UIRouter, UIView, UISref, UISrefActive, pushStateLocationPlugin} from '@uirouter/react';
import reducer from './reducers';

// import './index.css';

import Login from './Login';
import Configuration from './Configuration';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

const LoginComponent = () => <Login store={store} />;
const Signup = () => <h3>Signup</h3>;
const List = () => <h3>List</h3>;
const Detail = () => <h3>Detail</h3>;
const ConfigurationComponent = () => <Configuration store={store} />

let loginState = { name: 'login', url: '/login',  component: LoginComponent };
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
    <Provider store={store}>
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
    </Provider>
  </UIRouter>, document.getElementById('root')
);

registerServiceWorker();
