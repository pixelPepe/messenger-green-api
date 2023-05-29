import React, { useState } from 'react';
import { GetChatPropsI } from './GetChatProps';
import styles from './GetChat.module.scss';
import { getContactInfo } from '../../services/services';

export const GetChat: React.FC<GetChatPropsI> = ({
  openChat,
  idInstance,
  apiTokenInstance,
}) => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const data = JSON.stringify({
    chatId: `${phoneNumber}@c.us`,
  });

  const handleClick = (e: any) => {
    e.preventDefault;
    const fetchData = async () => {
      const contactData = await getContactInfo(
        idInstance,
        apiTokenInstance,
        data
      );

      if (contactData) {
        openChat();
      }
    };
    setPhoneNumber('');
    fetchData();
  };

  return (
    <div className={styles.getChatContainer}>
      <input
        placeholder="Введите номер телефона"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        type="text"
      />
      <button onClick={handleClick}>Найти</button>
    </div>
  );
};
