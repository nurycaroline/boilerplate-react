import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 20px;
`;

export const StatusUser = styled.div`
  p {
    color: ${props => props.logged ? 'green' : 'red'};
  }
`;

export const List = styled.ul`
  list-style: none;

  li {
    color: ${props => props.theme.colors.black}
  }
`;