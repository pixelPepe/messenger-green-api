import React, { useEffect, useState } from 'react';
import { MessageListPropsI } from './MessageLIstProps';
import styles from './MessageList.module.scss';
import { Message } from '..';
import { getChatHistory } from '../../services/services';

export const MessageList: React.FC<MessageListPropsI> = ({
  chat,
  idInstance,
  apiTokenInstance,
}) => {
  const [messages, setMessages] = useState([]);

  const data = JSON.stringify({
    chatId: chat,
    count: 100,
  });

  useEffect(() => {
    if (chat) {
      const refreshMessages = setInterval(function () {
        const fetchData = async () => {
          const chatsData = await getChatHistory(
            idInstance,
            apiTokenInstance,
            data
          );
          setMessages(chatsData);
        };
        fetchData();
      }, 2000);
      return () => {
        clearInterval(refreshMessages);
      };
    }
  }, [chat]);

  const sortMessages = (messages: never[]) => {
    return messages.sort((a: any, b: any) => a.timestamp - b.timestamp);
  };

  return (
    <div className={styles.messagesList}>
      {messages.length &&
        sortMessages(messages).map((message: any) => {
          return (
            <Message key={message.idMessage} message={message.textMessage} />
          );
        })}
    </div>
  );
};
