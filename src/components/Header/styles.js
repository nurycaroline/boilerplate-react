import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  background: ${props => props.theme.colors.grayLight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;

  button {
    background: grey;
    color: ${props => props.theme.colors.white};
    padding: 10px;
    border-radius: 4px;
  }
`;

export const Logo = styled(Link)`
  max-width: 150px;
`;