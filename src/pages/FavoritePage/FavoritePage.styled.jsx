import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const WrapperSelect = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 128px;
  padding-right: 128px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px 29px;
  padding-left: 128px;
  padding-right: 128px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const WrapperLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled(Link)`
  padding: 14px 34px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  margin-top: 20px;
  font-family: 'Manrope';
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42;
  text-transform: none;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    background-color: #0b44cd;
  }
`;
