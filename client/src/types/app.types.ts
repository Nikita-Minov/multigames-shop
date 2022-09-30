/* eslint-disable no-unused-vars */
import {SocialLink} from './components/header/header.types';
/* eslint-enable no-unused-vars */

export interface AppProps {
  menuBar: boolean;
  setMenuBar: any;
  socialLinksArray: Array<SocialLink>;
  isAdmin: boolean;
}