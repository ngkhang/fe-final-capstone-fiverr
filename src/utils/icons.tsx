import React from 'react';
import {
  IoLogoTiktok,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoFacebook,
  IoLogoPinterest,
  IoAccessibility
} from 'react-icons/io5';

import { FaXTwitter } from 'react-icons/fa6';
import { RiGlobalLine } from 'react-icons/ri';
import { TfiMoney } from 'react-icons/tfi';

interface Icon {
  [key: string]: React.ReactElement;
}
const Icons: Icon = {
  Tiktok: <IoLogoTiktok />,
  Instagram: <IoLogoInstagram />,
  Linkedin: <IoLogoLinkedin />,
  Facebook: <IoLogoFacebook />,
  Pinterest: <IoLogoPinterest />,
  Twitter: <FaXTwitter />,
  Accessibility: <IoAccessibility />,
  GlobalLine: <RiGlobalLine />,
  Money: <TfiMoney />,
};

export default Icons;
