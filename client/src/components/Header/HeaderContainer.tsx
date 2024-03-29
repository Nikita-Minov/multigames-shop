import * as React from 'react';
import Header from './Header';
import vk from '../../assets/img/header/vk.svg';
import tg from '../../assets/img/header/telegram.svg';
/* eslint-disable no-unused-vars */
import {
  HeaderContainerProps,
  Link,
  SocialLink,
} from '../../types/components/header/header.types';
import {useState} from 'react';
/* eslint-enable no-unused-vars */

const HeaderContainer = ({setMenuBar, menuBar}: HeaderContainerProps) => {
  const [linksArray, setLinksArray] = useState<Array<Link>>([
    {name: 'Товары', url: '/', isActive: true, id: 0},
    {name: 'Соглашение', url: '/agreement', isActive: false, id: 1},
  ]);

  const socialLinksArray:Array<SocialLink> = [
    {name: 'Техподдержка', url: 'https://t.me/skygamessupport', icon: tg},
    {name: 'Отзывы', url: 'https://vk.com/topic-187465500_48457072?offset=120', icon: vk},
  ];

  const updateLinksArray = (id: number) => {
    setLinksArray(linksArray.map((el) => (
      el.id == id? {...el, isActive: true}: {...el, isActive: false}
    )));
  };
  return (
    <Header
      menuBar={menuBar}
      setMenuBar={setMenuBar}
      updateLinksArray={updateLinksArray}
      links={linksArray}
      socialLinks={socialLinksArray}
    />
  );
};

export default HeaderContainer;
