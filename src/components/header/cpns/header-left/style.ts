import styled from "styled-components";

const HeaderLeftWrapper = styled.div`
  flex: 1;
  margin-left: 24px;
  color: ${(props) => props.theme.color.primaryColor};
  .logo {
    cursor: pointer;
  }
`;

export default HeaderLeftWrapper;
