import React from 'react';
import AuthHeader from '../../components/AuthHeader'

const AuthLayout = ({ children }) => (
  <div className='auth'>
    <AuthHeader />
    <div className='auth__body'>
      {children}
    </div>
  </div>
)

export default AuthLayout;