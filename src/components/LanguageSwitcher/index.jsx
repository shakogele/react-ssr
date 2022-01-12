import React from 'react';
import { useTranslation } from 'react-i18next';
import { languages } from '../../constants/lang';
import { useHistory } from 'react-router-dom';
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const history = useHistory();

  const changeLanguage = (language) => {
    const path = window.location.pathname;
    const pathsArr = path.split('/');
    if(language !== i18n.language) {
      if(languages.indexOf(pathsArr[1]) > -1) {
        pathsArr[1] = language;
        history.push(pathsArr.join('/'))
      }else{
        history.push(`/${language}${path}`)
      }
    }

    i18n.changeLanguage(language);
  }

  return (
    <div className='language-switcher'>
      <span onClick={() => changeLanguage('en')} aria-label='button'>EN</span>
      <span onClick={() => changeLanguage('de')} aria-label='button'>DE</span>
    </div>
  )
}

export default LanguageSwitcher;