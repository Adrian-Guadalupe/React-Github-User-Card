import React from 'react';

const FollowingCard = ({ following }) => {
   return (
      <div>
         <img src={following.avatar_url} />
         <h2>Login Id: {following.login}</h2>
      </div>
   )
}

export default FollowingCard;