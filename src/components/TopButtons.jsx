import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

function TopButtons({setQuery}) {
    const { loginWithRedirect } = useAuth0();
    
        const { logout,isAuthenticated,user} = useAuth0();

    const cities=[
        {
            id:1,
            title:'Kolkata',
        },{
            id:2,
            title:'Jaipur',
        },{
            id:3,
            title:'Bangalore',
        },{
            id:4,
            title:'Delhi',
        },{
            id:5,
            title:'Mumbai',
        },
    ];
  
  return( 
  <div className="flex items-center justify-around my-6">
     {cities.map((city)=>(
        <button key={city.id} className="text-white text-lg font-medium" onClick={()=>setQuery({q:city.title})}>{city.title}</button>
     ))}
     {
        isAuthenticated && <p className="text-white text-sm font-medium">{user.name}</p>
     }
     {
        isAuthenticated?<button className="text-white text-lg font-medium" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out</button>
      :
      <button className="text-white text-lg font-medium" onClick={() => loginWithRedirect()}>Log In</button>
     }
     
     
    
  </div>   
  );
}

export default TopButtons
