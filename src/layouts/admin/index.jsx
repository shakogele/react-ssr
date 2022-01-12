import React from 'react';
import AdminHeader from '../../components/AdminHeader'

const AdminLayout = ({ children }) => (
  <div className='auth'>
    <AdminHeader />
    {children}
  </div>
)

export default AdminLayout;