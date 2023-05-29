import React from 'react';
import { MessagePropsI } from './MessageProps';
import styles from './Message.module.scss';

export const Message: React.FC<MessagePropsI> = ({ message }) => {
  return <div className={styles.message}>{message}</div>;
};
