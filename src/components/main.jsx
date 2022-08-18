/** @format */

import React from "react";
import { Content } from "./content";
import { MainBox } from "./styled-components/main-styled";
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";
import { Wrapper } from "./wrapper";

export const Main = () => {
  return (
    <MainBox>
      <Sidebar />
      <Wrapper> 
        <Navbar />
        <Content />
      </Wrapper>
    </MainBox>
  );
};
