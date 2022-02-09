import Card from './Card';
import { useContext } from 'react';
import { dataContext } from './context/dataContext';

function Home() {
  const appData = useContext(dataContext);
  let { isLogin } = appData.data;
  return (
    <>
      <h1 className="center">🚀 Welcome to Homepage!</h1>
      {isLogin ? (
        <Card />
      ) : (
        <p className="center m5">Please Login to display user</p>
      )}
    </>
  );
}

export default Home;
