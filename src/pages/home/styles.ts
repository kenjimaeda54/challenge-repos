import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

export const Body = styled.div`
  margin-top: 57px;
  padding: 0px 136px;
`;

export const WrapTitles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 199px;
`;

export const Title = styled.h3`
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: 35px;
  line-height: 41px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const SubTitle = styled(Title)`
  margin-left: 63px;
`;

export const WrapInput = styled.div`
  display: flex;
  margin-top: 73px;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  height: 71px;
  border-radius: 20px;
  padding: 22px 45px;
  width: 813px;
  background-color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.fonts.regular};
  font-size: 22px;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.black};
  &::placeholder {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const ButtonInput = styled.button`
  position: relative;
  left: -121px;
  padding: 15px 0px;
  width: 120px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.7;
  }
`;

export const WrapCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 89px;
  margin-bottom: 89px;
  width: 100%;
`;
