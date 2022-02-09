import { useContext } from 'react';
import { dataContext } from './context/dataContext';

export default function UserInfo() {
  const appData = useContext(dataContext);
  let { data } = appData.data;
  return (
    <div className="user-info">
      <img
        className="user-avatar"
        src={data.avatarURL}
        width="50"
        height="50"
        alt="User Avatar"
      />
      <p>{data.name}</p>
    </div>
  );
}
