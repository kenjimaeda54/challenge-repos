import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.lightGray};
  overflow-y: hidden;
`;

export const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

export const Body = styled.div`
  margin-top: 57px;
  padding: 0px 136px;
  margin-bottom: 57px;
`;

export const ContainerTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WrapTitles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

export const Title = styled.h3`
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: 30px;
  line-height: 35px;
  color: ${({ theme }) => theme.colors.black};
`;

export const SubTitle = styled.span`
  font-weight: ${({ theme }) => theme.fonts.regular};
  font-size: 25px;
  line-height: 29px;
  color: ${({ theme }) => theme.colors.black};
  width: 70%;
`;

export const Img = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 65px;
`;

export const ContainerSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin: 64px 0px;
`;

export const SectionTitle = styled.h3`
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: 35px;
  line-height: 41px;
  color: ${({ theme }) => theme.colors.black};
`;

export const SectionSubTitle = styled.span`
  font-weight: ${({ theme }) => theme.fonts.regular};
  font-size: 30px;
  line-height: 35px;
  color: ${({ theme }) => theme.colors.black};
  margin-left: 23px;
`;

export const SectionLanguage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  justify-content: flex-end;
`;

export const SectionRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 43px;
  align-items: center;
  overflow-x: hidden;
  overflow-y: scroll;
  gap: 35px;
  padding: 0px 50px;
  height: calc(100vh - 120px);
  scrollbar-color: ${({ theme }) => theme.colors.primary}
    ${({ theme }) => theme.colors.gray};
  scrollbar-width: 27px;
  ::-webkit-scrollbar {
    width: 27px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 100px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.gray};
    width: 27px;
  }
`;

export const TitleSectionRight = styled.h3`
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: 35px;
  line-height: 41px;
  color: ${({ theme }) => theme.colors.black};
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 57px;
  width: 100%;
  gap: 35px;
`;
