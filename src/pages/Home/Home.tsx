import React, { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import { ChatList, GetChat, MessagesContainer } from '../../components';
import { useSelector } from 'react-redux';
import { HomePropsI } from './HomeProps';
import { useNavigate } from 'react-router-dom';

export const Home: React.FC<HomePropsI> = () => {
  const [openedChat, setOpenedChat] = useState(null);
  const idInstance = useSelector((state: any) => state.form.idInstance);
  const apiTokenInstance = useSelector(
    (state: any) => state.form.apiTokenInstance
  );

  const navigate = useNavigate();
  const loginRedirect = () => {
    return navigate('/login');
  };

  useEffect(() => {
    if (!idInstance || !apiTokenInstance) {
      loginRedirect();
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <GetChat
          openChat={setOpenedChat}
          idInstance={idInstance}
          apiTokenInstance={apiTokenInstance}
        />
        <ChatList
          openChat={setOpenedChat}
          idInstance={idInstance}
          apiTokenInstance={apiTokenInstance}
        />
      </div>
      <div className={styles.rightPanel}>
        <MessagesContainer
          chatId={openedChat}
          idInstance={idInstance}
          apiTokenInstance={apiTokenInstance}
        />
      </div>
    </div>
  );
};
