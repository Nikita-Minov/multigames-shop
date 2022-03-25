import * as React from 'react';
import Header from './Header';
import vk from '../../assets/img/header/vk.svg';
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
    {name: 'Техподдержка', url: '/', icon: vk},
    {name: 'Отзывы', url: '/', icon: vk},
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
