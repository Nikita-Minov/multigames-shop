import * as React from 'react';
import App from './App';
/* eslint-disable no-unused-vars */
import {SocialLink} from './types/components/header/header.types';
import vk from './assets/img/header/vk.svg';
import agreement from './assets/img/header/agreement.svg';
import {useDispatch, useSelector} from 'react-redux';
import {StoreTypes} from './types/redux/store.types';
/* eslint-enable no-unused-vars */
import {useCookies} from 'react-cookie';
import {
  useEffect,
  useState,
} from 'react';
import {
  getProducts,
} from './redux/reducers/productsReducer/productsReducer';
import {
  getAllCategories,
} from './redux/reducers/categoriesReducer/categoriesReducer';
import {
  getUser,
} from './redux/reducers/usersReducer/usersReducer';
import {
  getAllAgreements,
} from './redux/reducers/agreementsReducer/agreementsReducer';

const AppContainer = () => {
  const socialLinksArray:Array<SocialLink> = [
    {name: 'Техподдержка', url: 'https://vk.com/skygamessu', icon: vk},
    {name: 'Отзывы', url: 'https://vk.com/topic-216351054_48888651', icon: vk},
    {name: 'Соглашение', url: '/agreement', icon: agreement},
  ];
  const dispatch = useDispatch();
  const isAdmin = useSelector((state: StoreTypes) =>
    state.usersReducer.user.isAdmin);
  const [cookies] = useCookies(['token']);
  useEffect(() => {
    Promise.all([
      dispatch(getProducts()),
      dispatch(getAllCategories()),
      dispatch(getAllAgreements()),
    ]);
    if (cookies.token) dispatch(getUser(cookies.token));
  }, []);
  const [menuBar, setMenuBar] = useState(false);
  return (
    <App
      menuBar={menuBar}
      setMenuBar={setMenuBar}
      isAdmin={isAdmin}
      socialLinksArray={socialLinksArray}
    />
  );
};

export default AppContainer;
