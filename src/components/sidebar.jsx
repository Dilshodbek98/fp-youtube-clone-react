/** @format */

import React, { useState, useContext } from "react";
import { SidebarBox } from "./styled-components/sidebarStyled";
import { data1, data2, data3 } from "../data/dataSidebar";
import { OpenContext } from "../openerContext";
import showMore from "../accets/icons/showMore.svg";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useContext(OpenContext);
  const [isOpenSubmenu1, setIsOpenSubmenu1] = useState(false);
  const [isOpenSubmenu2, setIsOpenSubmenu2] = useState(false);
  console.log(isOpenSubmenu1, isOpenSubmenu2);
  return (
    <>
      {isOpen && (
        <SidebarBox submenu1={isOpenSubmenu1} submenu2={isOpenSubmenu2}>
          <ul className='list'>
            {data1.map((value, ind) => {
              return (
                <li className='list-item' key={value.id}>
                  <a href='#'>{value.icon}</a>
                  <a href='#'>{value.title}</a>
                </li>
              );
            })}
          </ul>
          <ul className='list'>
            {data2.map((value, ind) => {
              return (
                <>
                  <li className='list-item' key={value.id}>
                    <a href='#'>{value.icon}</a>
                    <a href='#'>{value.title}</a>
                  </li>
                  {isOpenSubmenu1 && (
                    <div className='submenuBox'>
                      {value.submenu?.map((val) => {
                        return (
                          <li className='list-item'>
                            <a href='#'>{val.icon}</a>
                            <a href='#'>{val.title}</a>
                          </li>
                        );
                      })}
                    </div>
                  )}
                </>
              );
            })}
            <li
              className='list-item'
              onClick={() => setIsOpenSubmenu1(!isOpenSubmenu1)}>
              <a href='#'>
                <img src={showMore} className='downarrow1' />
              </a>
              {!isOpenSubmenu1 ? <a href='#'>Show More</a>
                : <a href='#'>Show fewer</a>
              } 
            </li>
          </ul>
          <p href='\' className='title'>
            SUBSCRIPTIONS
          </p>
          <ul className='list'>
            {data3.map((value, ind) => {
              return (
                <>
                  <li className='list-item' key={value.id}>
                    <a href='#'>{value.icon}</a>
                    <span className="itemBox">
                      <a href='#'>{value.title}</a>
                      <a href='#' className="icon2">{value.icon2}</a>
                    </span>
                  </li>
                  {isOpenSubmenu2 && (
                    <div className='submenuBox'>
                      {value.submenu?.map((val) => {
                        return (
                          <li className='list-item'>
                            <a href='#'>{val.icon}</a>
                            <span className='itemBox'>
                              <a href='#'>{val.title}</a>
                              <a className="icon2" href='#'>{val.icon2}</a>
                            </span>
                          </li>
                        );
                      })}
                    </div>
                  )}
                </>
              );
            })}
            <li
              className='list-item'
              onClick={() => setIsOpenSubmenu2(!isOpenSubmenu2)}>
              <a href='#'>
                <img src={showMore} className='downarrow' />
              </a>
              {!isOpenSubmenu2 ? (
                <a href='#'>Show More</a>
              ) : (
                <a href='#'>Show fewer</a>
              )}
            </li>
          </ul>
        </SidebarBox>
      )}
    </>
  );
};
