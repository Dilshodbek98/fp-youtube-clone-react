/** @format */

import React, {useContext} from "react";
import { ContentBox } from "./styled-components/content-styled";
import { data } from "../data/dataContent";
import { MyContext2 } from "../inputContext";

export const Content = () => {
  const [value, setValue] = useContext(MyContext2);
  let data2 = data.filter((val) => {
    return val.title.includes(value);
  })
  return (
    <ContentBox>
      {data.map((val) => {
         return val.title.toLowerCase().includes(value.toLowerCase()) && (
          <ContentBox.Card>
            <a href='#'>{val.image}</a>
            <div className='title'>
              <a href=''> {val.avatar}</a>
              <div className='description'>
                <p>{val.title}</p>
                <a href='#' className='author'>
                  {val.author}
                </a>
                <div className='inform'>
                  <a href='#'>{val.views}</a>
                  <a href='#'>{val.date}</a>
                </div>
              </div>
            </div>
          </ContentBox.Card>
         ) 
      })}
    </ContentBox>
  );
};
