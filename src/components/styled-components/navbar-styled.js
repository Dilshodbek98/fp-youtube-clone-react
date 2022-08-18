import styled from "styled-components";

export const NavbarBox = styled.div`
  display: flex;
  background-color: #212121;
  height: 56px;
  padding: 0 13.5px;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  a {
    min-width: 40px;
    display: flex;
    text-align: center;
    align-items: center;
    padding: 0 5px;
    height: 30px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    text-decoration: none;
    background-color: rgba(255, 255, 255, 0.4);
    color: #fff;
    border-radius: 30px;
  }
  a:hover {
    color: #212121;
    background-color: rgba(255, 255, 255, 0.9);
  }
`;