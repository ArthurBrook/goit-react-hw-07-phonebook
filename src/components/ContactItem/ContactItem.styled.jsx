import styled from 'styled-components';

export const StyledContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 2px solid #ff5500;
  color: #fff;
  font-size: 18px;
`;

export const DeleteButton = styled.button`
  padding: 8px 16px;
  background-color: #ff5500;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff0000;
  }
`;
