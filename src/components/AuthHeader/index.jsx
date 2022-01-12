import React from 'react';
import LanguageSwitcher from '../LanguageSwitcher';
import { Link } from 'react-router-dom'
import UserProfileBlock from '../UserProfileBlock';
import { useTranslation } from 'react-i18next'
import useBaseUrl from '../hooks/useBaseUrl';

const AuthHeader = () => {
  const { t }  = useTranslation();
  const url = useBaseUrl();
  return (
    <div className='header'>
      <div className='header__wrapper'>
        <div className='header__logo'>
          <Link to={url}>{t('logoText')}</Link>
        </div>
        <div className='header__user-profile'>
          <LanguageSwitcher />
          <UserProfileBlock/>
        </div>
      </div>
    </div>
  )
}

export default AuthHeader;