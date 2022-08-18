import styled from "styled-components";

const HeaderBox = styled.div`
  display: flex;
  background-color: #212121;
  height: 56px;
  align-items: center;
  padding: 0 24px;
  justify-content: space-between;
`;
HeaderBox.LogoWrapper = styled.div`
  width: 120px;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

HeaderBox.SearchWrapper = styled.div`
  border: none;
  display: flex;
  align-items: center;
  input {
    width: 574px;
    background-color: #000;
    border: 1px solid rgba(255, 255, 255, 0.2);
    height: 32px;
    border-radius: 2px;
    color: #fff;
    padding-left: 8px;
  }
  button {
    width: 65px;
    height: 32px;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 2px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
`;
HeaderBox.ProfileSection = styled.div`
  width: 184px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center
`;

export {HeaderBox}