import React, { useState } from 'react';
import { InputMessagePropsI } from './InputMessageProps';
import styles from './Input.module.scss';
import { sendMessage } from '../../services/services';

export const InputMessage: React.FC<InputMessagePropsI> = ({
  chatId,
  idInstance,
  apiTokenInstance,
}) => {
  const [textMessage, setTextMesage] = useState('');

  const data = JSON.stringify({
    chatId: chatId,
    message: textMessage,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fetchData = async () => {
      await sendMessage(idInstance, apiTokenInstance, data);
    };
    fetchData();
    setTextMesage('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.inputContainer}>
      <input
        value={textMessage}
        onChange={(e) => setTextMesage(e.target.value)}
        type="text"
      />
      <button type="submit">Send</button>
    </form>
  );
};
