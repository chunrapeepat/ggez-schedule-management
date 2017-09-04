import React, { Component } from 'react'
import styled from 'styled-components'
import { fonts, WidthContainer } from '../core/styledCollection'

const Footer = styled.div`
  display: block;
  padding: 10px;
  margin: 30px 0;
  margin-top: 50px;
  text-align: center;
  font-family: ${fonts.generalFont}

  @media (max-width: 500px) {
    margin: 20px 0;
    margin-top: 30px;
  }

  ${this} > a {
    color: black;
    text-decoration: none;
    margin: 0 15px;

    &:hover {
      border-bottom: 3px solid #000;
    }

    @media (max-width: 500px) {
      margin: 0 10px;
    }
  }
`

export default class extends Component {
  render(){
    return (
      <Footer>
        <a target="_blank" href="https://facebook.com/chun42">Facebook</a>
        <a target="_blank" href="https://thechun.xyz">Personal Site</a>
        <a target="_blank" href="https://github.com/chunza2542/ggez-schedule-management">Source Code</a>
      </Footer>
    )
  }
}
