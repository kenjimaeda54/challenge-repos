import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 54px 0px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
`;
