import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.5;
  }
`;

export const ContainerLeft = styled.div`
  display: flex;
  gap: 70px;
`;

export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  width: 173px;
  background: ${({ theme }) => theme.colors.gray};
`;

export const Description = styled.div`
  display: flex;
  padding: 29px 0px 34px;
  width: 713px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
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
  text-align: left;
`;

export const ContainerRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 45px;
`;
