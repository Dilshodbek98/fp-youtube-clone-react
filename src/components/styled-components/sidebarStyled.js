/** @format */

import React from "react";
import styled from "styled-components";

const SidebarBox = styled.div`
  transition: all 0.4s ease;
  width: 240px;
  height: auto;
  background-color: rgba(33, 33, 33, 1);
  padding-top: 12px;
  .list {
    width: 100%;
    list-style-type: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    height: auto;
  }
  .list-item {
    display: flex;
    align-items: center;
    gap: 24px;
    width: 100%;
    height: 40px;
    padding-left: 24px;
    cursor: pointer;
  }
  .list-item:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  .itemBox{
    display: flex;
    flex-basis: 60%;
    margin: 0;
    justify-content: space-between;
  }


  span {
    margin: 0 auto;
  }
  .downarrow {
    transform: ${({ submenu2 }) => submenu2 && "rotate(180deg)"};
  }
  .downarrow1 {
    transform: ${({ submenu1 }) => submenu1 && "rotate(180deg)"};
  }
  .title{
    color: #fff;
    margin-left: 24px;
    margin-top: 8px;
  }
`;

export { SidebarBox };
