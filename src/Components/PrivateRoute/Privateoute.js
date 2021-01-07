import React, { Children, useContext, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Context } from '../../App';
const Privateoute = ({children,...rest}) => {
  const [Loggedin,setLoggedin]=useContext(Context)

    return (
        <Route
        {...rest}
        render={({ location }) =>
          Loggedin.issigned ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    
    );
};

export default Privateoute;