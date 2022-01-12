import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import useBaseUrl from '../hooks/useBaseUrl';

const UserProfileBlock = ({ user }) => {
  const { t } = useTranslation();
  const history = useHistory();
  const baseUrl = useBaseUrl();
  return (
    <div className='profile-block'>
      {
        user ? (
          <>
            <Link to={`${baseUrl}/admin/profile`} className='profile-block__link'>{user.name}</Link>
            <span className='profile-block__button' role='button'>{t('logOut')}</span>  
          </>
        ) : (
          <span className='profile-block__button' role='button' onClick={() => history.push(`${baseUrl}/login`)}>{t('logIn')}</span>  
        )
      }
        
    </div>
  )
}

export default UserProfileBlock;