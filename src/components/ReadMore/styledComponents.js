import styled from 'styled-components'

export const BgCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`

export const AppCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-top: 32px;
  margin-bottom: 32px;
  max-width: 550px;
  @media screen and (min-width: 768px) {
    width: 95%;
    margin-top: 64px;
    margin-bottom: 64px;
  }
`
export const Title = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: #1e293b;
  font-weight: 600;
  margin: 0;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    font-size: 35px;
    line-height: 1.5;
  }
`
export const SubTitle = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #1e293b;
  margin-top: 12px;
  margin-bottom: 15px;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    font-family: 16px;
    line-height: 1.4;
    margin-top: 16px;
  }
`
export const Image = styled.img`
  width: 100%;
  margin-bottom: 12px;
  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`

export const Desc = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #334155;
  margin-top: 14px;
  margin-bottom: 8px;
  line-height: 1.7;
  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
  }
`
export const Button = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 12px;
  background-color: #1f81ff;
  border: none;
  border-radius: 6px;
  margin-top: 8px;
  padding: 8px 16px;
  cursor: pointer;
  outline: none;
  align-self: flex-start;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    margin-top: 16px;
    align-self: center;
  }
`
