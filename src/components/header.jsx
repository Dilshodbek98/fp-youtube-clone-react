import React, {useContext} from 'react';
import gamburger from "../accets/icons/guide.svg";
import Logo from "../accets/icons/Logo.svg";
import { OpenContext } from '../openerContext';
import { HeaderBox } from './styled-components/header-styled';
import video from '../accets/icons/profile-section/video.svg';
import table from "../accets/icons/profile-section/table.svg";
import notification from "../accets/icons/profile-section/notification.svg";
import profile from '../accets/icons/profile-section/profile.png';
import search from '../accets/icons/search.svg'
import { MyContext2 } from '../inputContext';


export const Header = () => {
  const [isOpen, setIsOpen] = useContext(OpenContext)
  const [value, setValue] = useContext(MyContext2)
  console.log(value);
  return (
    <HeaderBox>
      <HeaderBox.LogoWrapper>
        <a href='#' onClick={() => setIsOpen(!isOpen)}>
          <img src={gamburger} alt='' />
        </a>
        <a href='#'>
          <img src={Logo} alt='' />
        </a>
      </HeaderBox.LogoWrapper>
      <HeaderBox.SearchWrapper>
        <input type='text' placeholder='Search'
          onChange={ (e)=> setValue(e.target.value)} />
        <button><img src={search} alt="" /></button>
      </HeaderBox.SearchWrapper>
      <HeaderBox.ProfileSection>
        <a href='#'>
          <img src={video} />
        </a>
        <a href='#'>
          <img src={table} />
        </a>
        <a href='#'>
          <img src={notification} alt='' />
        </a>
        <a href='#'>
          <img src={profile} alt='' />
        </a>
      </HeaderBox.ProfileSection>
    </HeaderBox>
  );
}
