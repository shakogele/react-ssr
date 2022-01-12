import React, { useState } from 'react';
import validate from '../../helpers/validation';
import classNames from 'classnames';
import axios from 'axios';
import { useTranslation } from 'react-i18next'

const LoginPage = () => {
  const { t } = useTranslation();
  const [controls, setControls] = useState({
    email: {
      value: '',
			touched: false,
			validationRules: {
				minLength: 3,
				isEmail: true,
			},
			valid: false,
    },
    password: {
      value: '',
			touched: false,
			validationRules: {
				minLength: 3,
			},
			valid: false,
    }
  });

  const updateState = (field, value) => {
		setControls({
			...controls,
			[field]: {
				...controls[field],
				value,
				touched: true,
				valid: validate(value, controls[field].validationRules),
			},
		})
	};

  const isValidForm = controls.email.valid && controls.password.valid;

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const res = isValidForm && await axios.post('/authenticate', { auth: { username: controls.email.value, password: controls.password.value } });
      console.log({res})
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className='login-page'>
      <div className='login-form'>
        <div className={classNames('login-form__item', { error: controls.email.valid && !controls.email.touched})}>
          <label htmlFor="username">{t('email')}: </label>
          <input id="usename" type="text" onChange={e => updateState('email', e.target.value)}/>
        </div>
        <div className={classNames('login-form__item', { error: controls.password.valid && !controls.password.touched})}>
          <label htmlFor="password">{t('password')}: </label>
          <input id="password" type="password" onChange={e => updateState('password', e.target.value)}/>
        </div>
        <div className='login-form__item'>
          <button disabled={!isValidForm} onClick={submitForm}>{t('logIn')}</button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
