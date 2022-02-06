import React from 'react';
import NavButton from 'shared/components/navButton';
import { User } from 'definitions/user';
import PostList from 'components/PostList';
import PhotoList from 'components/PhotoList';
import './UserFeed.scss';
import { FiLogOut } from 'react-icons/fi';

type Props = {
  user: User;
  logout: Function;
};

function UserFeed({ user, logout }: Props) {
  const [view, setView] = React.useState<'post' | 'photo'>('post');
  return (
    <div className={'UserFeed'}>
      <div className={'feed-header'}>
        <div className={'user-info'}>
          <img
            alt={user.name}
            src={`https://picsum.photos/200/300?random=${user.id}`}
          />
          <h5>{user.name}</h5>
        </div>
        <div className={'logout'} onClick={() => logout()}>
          <p>
            Logout{' '}
            <span>
              <FiLogOut />
            </span>
          </p>
        </div>
      </div>
      <div style={{ paddingLeft: '12px' }} className={'nav-button-wrap'}>
        <NavButton
          onClick={() => {
            setView('post');
          }}
          title={'Posts'}
          isActive={view === 'post'}
        />
        <NavButton
          onClick={() => {
            setView('photo');
          }}
          title={'Photos'}
          isActive={view === 'photo'}
        />
      </div>
      {view === 'post' ? (
        <PostList userId={user.id} />
      ) : (
        <PhotoList userId={user.id} />
      )}
    </div>
  );
}

export default UserFeed;
