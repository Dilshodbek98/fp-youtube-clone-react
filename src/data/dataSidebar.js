/** @format */
import React from "react";
//icons
import home from "../accets/icons/home.svg";
import explore from "../accets/icons/explore.svg";
import shorts from "../accets/icons/explore.svg";
import subscription from "../accets/icons/subscription.svg";
import history from "../accets/icons/history.svg";
import yourVideoes from "../accets/icons/yourVideoes.svg";
import watchLater from "../accets/icons/watchLater.svg";
import library from '../accets/icons/library.svg'

//images
import thegame from "../accets/images/thegame.png";
import leanyo from "../accets/images/leanyo.png";
import bestkuafor from "../accets/images/beskuafor.png";
import meyauseu from "../accets/images/meyauseu.png";
import discoverdesign from "../accets/images/discoverdesign.png";
import buildgame from "../accets/images/buildgame.png";
import vloggerman from "../accets/images/vloggerman.png";

// icons
import online from '../accets/icons/online.svg'
import news from '../accets/icons/news.svg'
import {MdOutlinePlaylistPlay} from 'react-icons/md'
import {BiLike} from "react-icons/bi";
import {HiOutlineStatusOnline} from 'react-icons/hi'
const data1 = [
  {
    id: 1,
    title: "Home",
    icon: <img src={home} />,
  },
  {
    id: 2,
    title: "Explore",
    icon: <img src={explore} />,
  },
  {
    id: 3,
    title: "Shorts",
    icon: <img src={shorts} />,
  },
  {
    id: 4,
    title: "Subscriptions",
    icon: <img src={subscription} />,
  },
];

const data2 = [
  {
    id: 1,
    title: "Library",
    icon: <img src={library} />,
  },
  {
    id: 2,
    title: "History",
    icon: <img src={history} />,
  },
  {
    id: 3,
    title: "Your Videoes",
    icon: <img src={yourVideoes} />,
  },
  {
    id: 4,
    title: "Watch Later",
    icon: <img src={watchLater} />,
    submenu: [
      {
        id: 1,
        title: "Liked videos",
        icon: <BiLike />,
      },
      {
        id: 2,
        title: "Your Playlist",
        icon: <MdOutlinePlaylistPlay />,
      },
      {
        id: 3,
        title: "React Projects",
        icon: <HiOutlineStatusOnline />,
      },
      {
        id: 4,
        title: "JavaScript course",
        icon: <HiOutlineStatusOnline />,
      },
      {
        id: 5,
        title: "Mix - musics",
        icon: <HiOutlineStatusOnline />,
      },
    ],
  },
];

const data3 = [
  {
    id: 1,
    title: "The game",
    icon: <img src={thegame} />,
    icon2: <img src={online} />,
  },
  {
    id: 2,
    title: "Lean Yo",
    icon: <img src={leanyo} />,
    icon2: <img src={online} />,
  },
  {
    id: 3,
    title: "Best Kuafor",
    icon: <img src={bestkuafor} />,
    icon2: <img src={online} />,
  },
  {
    id: 4,
    title: "Meyau Seu",
    icon: <img src={meyauseu} />,
    icon2: <img src={news} />,
  },
  {
    id: 5,
    title: "Discover Design",
    icon: <img src={discoverdesign} />,
    icon2: <img src={news} />,
    submenu: [
      {
        id: 1,
        title: "Build Game",
        icon: <img src={buildgame} />,
        icon2: <img src={news} />,
      },
      {
        id: 2,
        title: "Vlogger Man",
        icon: <img src={vloggerman} />,
        icon2: <img src={news} />,
      },
    ],
  },
];


export {data1, data2, data3}