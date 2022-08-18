import styled from "styled-components";

const ContentBox = styled.div`
  padding: 23px 24px;
  background-color: #181818;
  display: grid;
  grid-template-columns: repeat(4, 250px);
  grid-template-rows: repeat(4, 230px);
  gap: 41px 20px;
`;


ContentBox.Card = styled.div`
  .title {
    display: flex;
    margin-top: 12px;
    gap: 12px;
    color: #fff;
    cursor: pointer;
  transition: all ease 0.5s;
  }
  :hover {
    transform: scale(1.1);
    color: #212121;
    background-color: rgba(255, 255, 255, 0.1);
  }
  a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
  }
  .inform {
    display: flex;
    gap: 13px;
  }
`;

export {ContentBox}