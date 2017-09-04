import React, { Component } from 'react'
import styled from 'styled-components'
import { fonts, WidthContainer } from '../core/styledCollection'

const HeroContainer = styled.div`
  padding: 70px 0;

  ${this} > h1 {
    margin: 0;
    font-size: 50px;
    color: #333;
    font-weight: 300;
    font-family: ${fonts.generalFont}
  }

  ${this} > span {
    color: #555;
    margin-top: 20px;
    display: block;
    font-family: ${fonts.generalFont}
  }
`

export default class extends Component {
  render(){
    return(
      <div>
        <WidthContainer>
          <HeroContainer>
            <h1>{this.props.heading}</h1>
          </HeroContainer>
        </WidthContainer>
      </div>
    )
  }
}
