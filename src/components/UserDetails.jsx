// import module.css here;
//import UserDetails from './userDetails.module.css'

import "../index.css";

const UserDetails = ({user}) => {

  
  return (
    <>
      <div data-testid="user-container" style={{display: 'flex'}}>

        <div>
        <img src={user.avatar} alt=""  height="60px" width="60px"/>
        </div>
        
        <div>
          <div style={{display: 'flex'}}>
            <h3 data-testid="user-fname">{user.first_name}</h3>
            <h3 data-testid="user-lname">{user.last_name}</h3>
          </div>
          <div>
            <p data-testid="user-address">{user.address}</p>
          </div>
        </div>

         <div className="logo">
         <div>
          <h3 data-testid="user-karma" className="font">{user.karma}</h3>
        </div>
        <div>
          <h3 data-testid="user-followers" className="font">{user.followers}K</h3>
        </div>
        <div>
          <h3 data-testid="user-posts" className="font">{user.posts}</h3>
        </div>

         </div>
        
        <button data-testid="follow-btn"  >{user.is_following ? "Unfollow": "Follow"}</button>
      </div>
    </>
  );
};
export default UserDetails;
