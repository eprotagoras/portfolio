import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import colors from "styles/colors";

export const Title = styled.span`
  display: inline-block;
  font-size: 2rem;
  font-weight: 500;
  margin: 1rem 2rem 1rem;
  transition: all 100ms ease-in-out;
  text-decoration: none;
  color: ${colors.blue500};
  :hover {
    color: ${colors.blue600};    
    background-color: ${colors.blue200};
  }
`;

export const Copy = styled.p`
  color: #757575;
  margin: 0 2rem 2rem;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;

export const Card = styled.figure`
  margin-bottom: 5rem;
  border: 1px solid #dcdee4;
  border-radius: 6px;
  transition: all .25s ease-out;
  img {
    transition: 0.8s !important;
  }
  :hover {
    border: 1px solid #414141;
    img {
      transform: scale(1.25);
    }
  }
`;

export const Thumb = styled.a`
  flex: none;
  border-radius: 6.8px 6.8px 0 0;
  overflow: hidden;
  text-decoration: none;
  div {
    height: 200px;
    display: flex;
    vertical-align: middle;
    margin: 4.2px;
    background-color: #fff;
    box-sizing: border-box;
    white-space: pre;
  }
`
export const Line = styled.div`
  border-bottom: 1px solid #dcdee4;
`

export const DateText = styled.p`
  margin: 2rem 2rem 0;
  color: #414141;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
  font-size: 1.2rem;
  white-space: nowrap;
  font-weight: 600;
`