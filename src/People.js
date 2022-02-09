import { Component } from 'react';
import ShowPeople from './ShowPeople';
import { dataContext } from './context/dataContext';

class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPeopleClosed: true,
    };
  }

  toggleHandler = () => {
    this.setState((prev) => ({ showPeopleClosed: !prev.showPeopleClosed }));
  };
  static contextType = dataContext;
  render() {
    let { isLogin, people } = this.context.data;
    if (!(isLogin && people)) {
      throw new Error('Auth Failed');
    }

    return (
      <>
        <h1 className="center">🚀 Welcome to People page!</h1>
        <div className="center">
          <button className="show-people" onClick={this.toggleHandler}>
            Show People
          </button>
        </div>
        {this.state.showPeopleClosed ? (
          ''
        ) : (
          <ShowPeople people={people} toggleHandler={this.toggleHandler} />
        )}
      </>
    );
  }
}

export default People;
