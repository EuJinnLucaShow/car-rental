import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  width: 274px;
  height: 426px;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  flex-shrink: 0;
`;

export const WrapperImage = styled.div`
  position: relative;
  width: 274px;
  height: 268px;
`;

export const Image = styled.img`
  width: 100%;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
`;

export const WrapperTitle = styled.div`
  width: 274px;
  align-items: center;
  color: #121417;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  padding-right: 8px;
`;

export const Description = styled.ul`
  color: rgba(18, 20, 23, 0.5);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-weight: 400;
  line-height: 1.5;
  row-gap: 4px;
  width: fit-content;
  & > li:not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.1);
    margin-right: 6px;
    padding-right: 6px;
  }
`;
