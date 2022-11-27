import styled from 'styled-components';

export const StarIcon = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  background-color: ${props => (props.active ? '#ffc806' : '#ddd')};
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
`;
