import React, { useState } from 'react';
import { LoginFormPropsI } from './LoginFormProps';
import styles from './LoginForm.module.scss';
import { useDispatch } from 'react-redux';
import { setIdInstance, setApiTokenInstance } from '../../store/formSlice';
import { useNavigate } from 'react-router-dom';

export const LoginForm: React.FC<LoginFormPropsI> = () => {
  const dispatch = useDispatch();
  const [idInstance, setIdInstanceLocal] = useState('');
  const [apiTokenInstance, setApiTokenInstanceLocal] = useState('');

  const navigate = useNavigate();
  const homeRedirect = () => {
    return navigate('/');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setIdInstance(idInstance));
    dispatch(setApiTokenInstance(apiTokenInstance));
    homeRedirect();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        idInstance:
        <input
          type="text"
          value={idInstance}
          onChange={(e) => setIdInstanceLocal(e.target.value)}
        />
      </label>

      <label>
        apiTokenInstance:
        <input
          type="text"
          value={apiTokenInstance}
          onChange={(e) => setApiTokenInstanceLocal(e.target.value)}
        />
      </label>

      <button type="submit">Login</button>
    </form>
  );
};
