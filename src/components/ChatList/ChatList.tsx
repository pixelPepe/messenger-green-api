import React, { useEffect, useState } from 'react';
import { ChatLIstPropsI } from './ChatListProps';
import styles from './ChatList.module.scss';
import { Chat } from '..';
import { getChats } from '../../services/services';

export const ChatList: React.FC<ChatLIstPropsI> = ({
  openChat,
  idInstance,
  apiTokenInstance,
}) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const chatsData = await getChats(idInstance, apiTokenInstance);
      setChats(chatsData);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.chatList}>
      <div></div>
      {chats &&
        chats.map((chat: any, index: number) => {
          return (
            <div key={index} onClick={() => openChat(chat.id)}>
              <Chat id={chat.id} />
            </div>
          );
        })}
    </div>
  );
};
