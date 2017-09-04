import styled from 'styled-components'

export const fonts = {
  headerFont: `'Playfair Display', serif;`,
  generalFont: `'Roboto', sans-serif;`,
}

export const WidthContainer = styled.div`
  padding: 0 60px;

  @media (max-width: 1000px) {
    padding: 0 30px;
  }

  @media (max-width: 500px) {
    padding: 0 15px;
  }

  @media (min-width: 1450px) {
    padding: 0;
    width: 1440px;
    margin: auto auto;
  }
`

export const Button = styled.button`
  border: 0;
  color: ${props => (props.white) ? 'white' : 'black'};
  background: ${props => (props.bg) ? props.bg : 'white'};
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  cursor: pointer;
  outline: none;
  padding: 12px 25px;
  font-family: 'Roboto', 'Kanit', sans-serif;
  font-size: 16px;

  &:hover {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }
`
