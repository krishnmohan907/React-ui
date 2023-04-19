import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import {
  Switch,
  Route,
  BrowserRouter
} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { Provider } from 'react-redux';

// const LoginContainer = React.lazy(() => import('./Component/Login/Login.Container'));
const SignUpcomponent = React.lazy(() => import('./Component/SignUp/SignUp.Container'));
const OrderComponent = React.lazy(() => import('./Component/OrderComponent/OrderContainer'));
ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<div> Loading </div>}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={OrderComponent} />
          <Route exact path="/signUp" component={SignUpcomponent} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  </Provider>,
  document.getElementById('root')
);
// const url = `${process.env.REACT_APP_HASH}`;
{/* <script src="/url/bundle.js"></script>   */}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
