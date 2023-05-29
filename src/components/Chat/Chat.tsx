import React from 'react';
import { ChatPropsI } from './ChatProps';
import styles from './Chat.module.scss';

export const Chat: React.FC<ChatPropsI> = ({ id }) => {
  return <div className={styles.chat}>{id}</div>;
};
