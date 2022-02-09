import React from 'react';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import Auth from './Auth';
import articles from './data.json';
import people from './got.json';
import './styles.css';
import verifyLogin from './utils';
import ErrorBoundary from './ErrorBoundary';
import { dataContext } from './context/dataContext';

export default class App extends React.Component {
  state = {
    navClosed: false,
    isLogin: false,
    isModalOpen: false,
    data: null,
    userInfo: null,
    people: people,
  };

  changeNavbar = () => {
    this.setState({ navClosed: !this.state.navClosed });
  };

  handleModal = (isOpen) => {
    this.setState({ isModalOpen: isOpen });
  };

  loginHandler = (email, password) => {
    verifyLogin(email, password).then((res) => {
      this.setState({
        isLogin: true,
        userInfo: res,
        data: articles,
      });
    });
  };

  logoutHandler = () => {
    this.setState({
      isLogin: false,
      data: null,
      people: null,
    });
  };

  render() {
    return (
      <div className={`container ${this.state.navClosed ? 'nav-closed' : ''}`}>
        <dataContext.Provider
          value={{
            data: this.state,
            changeNavbar: this.changeNavbar,
            logoutHandler: this.logoutHandler,
            handleModal: this.handleModal,
            loginHandler: this.loginHandler,
          }}
        >
          <Header />
          <div className="main">
            <Sidebar />
            <ErrorBoundary>
              <Main />
            </ErrorBoundary>
          </div>
          {this.state.isModalOpen ? <Auth /> : ''}
        </dataContext.Provider>
      </div>
    );
  }
}
