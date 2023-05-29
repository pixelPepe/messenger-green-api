import React from 'react';
import { MessagesContainerPropsI } from './MessagesContainerProps';
import styles from './MessagesContainer.module.scss';
import { InputMessage, MessageList } from '..';

export const MessagesContainer: React.FC<MessagesContainerPropsI> = ({
  chatId,
  idInstance,
  apiTokenInstance,
}) => {
  return (
    <div className={styles.messagesContainer}>
      <MessageList
        chat={chatId}
        idInstance={idInstance}
        apiTokenInstance={apiTokenInstance}
      />
      <InputMessage
        chatId={chatId}
        idInstance={idInstance}
        apiTokenInstance={apiTokenInstance}
      />
    </div>
  );
};
