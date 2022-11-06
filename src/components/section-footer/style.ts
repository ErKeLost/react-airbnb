import styled from "styled-components";

export const SectionFooterWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 15px 0 10px;
  font-size: 17px;
  font-weight: 600;
  color: ${(props) => props.color};
  cursor: pointer;

  .text {
    margin-right: 5px;
  }

  &:hover {
    .text {
      text-decoration: underline;
    }
  }
`;
