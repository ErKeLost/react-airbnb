import styled from "styled-components";
const boxShadow = `transition: box-shadow .5s ease;
&:hover {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
}`;
const HeaderRightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${(props) => props.theme.color.textColor};
  font-weight: 600;
  margin-right: 24px;
  font-size: ${(props) => props.theme.size.textSize};
  .button {
    display: flex;
    height: 18px;
    line-height: 18px;
    align-items: center;
    .btn {
      padding: 10px 20px;
      border-radius: 22px;
      cursor: pointer;
      &:hover {
        background-color: #f5f5f5;
      }
    }
    .btnIcon {
      margin: 0 12px;
    }
  }
  .profile {
    display: flex;
    width: 77px;
    height: 40px;
    align-items: center;
    justify-content: space-evenly;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow}
  }
`;

export default HeaderRightWrapper;
