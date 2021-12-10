import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  padding: 29px 0px 34px;
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 29px;
  padding: 0px 56px;
`;

export const TitleDescription = styled.h3`
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: 30px;
  line-height: 35px;
  color: ${({ theme }) => theme.colors.black};
`;

export const SubTitleDescription = styled.p`
  font-weight: ${({ theme }) => theme.fonts.regular};
  font-size: 25px;
  line-height: 29px;
  color: ${({ theme }) => theme.colors.black};
`;

export const ContainerRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 45px;
`;
