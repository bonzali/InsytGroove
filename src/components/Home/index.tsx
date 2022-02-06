import React from 'react';
import './style.scss';
import UserList from 'components/UserList';
import PhotoList from 'components/PhotoList';
import UserFeed from 'components/UserFeed';
import { FaEdit, FaCross } from 'react-icons/fa';
import { User } from 'definitions/user';
import CreatePost from 'components/CreatePost';
type Props = {
  logout: Function;
};
function Home({ logout }: Props) {
  const [user, setUser] = React.useState<User | undefined>();
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className={'Home'}>
      <button onClick={() => setIsOpen(true)} className={'new-post-button'}>
        {' '}
        <FaEdit />
      </button>
      <UserList onUserSelected={(user) => setUser(user)} />
      {user ? (
        <UserFeed logout={logout} user={user} />
      ) : (
        <div className="photo-container">
          <h3>Community</h3>
          <PhotoList />
        </div>
      )}
      <div className={`sidebar ${isOpen ? 'active' : ''}`}>
        <CreatePost onClose={() => setIsOpen(false)} />
      </div>
    </div>
  );
}

export default Home;
