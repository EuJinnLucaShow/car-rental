import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  padding: 12px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-height: 3rem;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  max-width: 91.25em;
  margin: 0 auto;
  padding: 0 0.9375rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const NavMenu = styled(NavLink)`
  display: flex;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #f7f7fb;
  color: #121417;
  font-family: 'Manrope';
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */

  &.active {
    color: #fff;
    background: #3470ff;
  }

  &:hover {
    color: #fff;
    background: #3470ff;
  }
`;
