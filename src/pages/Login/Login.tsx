import React from 'react';
import { LoginPropsI } from './LoginProps';
import { LoginForm } from '../../components';
import styles from './Login.module.scss';
export const Login: React.FC<LoginPropsI> = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
};
