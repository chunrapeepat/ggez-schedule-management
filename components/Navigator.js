import React, { Component } from 'react'
import styled from 'styled-components'
import { fonts, WidthContainer } from '../core/styledCollection'

const NavContainer = styled.div`
  padding: 20px 0;
  position: fixed;
  width: 100%;
  z-index: 999;
  background: white;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.46);
  -moz-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.46);
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.46);

  ${this} > ${WidthContainer} > div {
    font-family: ${fonts.generalFont}
    font-size: 22px;
    display: inline-block;

    ${this} > b {
      font-family: ${fonts.headerFont}
      color: #333;
      display: inline-block;
      margin-right: 10px;

      &:after {
        content: '|';
        padding-left: 10px;
      }
    }
  }
`

const RightContainer = styled.div`
  float: right;
  display: inline-block;
  margin-top: 3px;

  ${this} > a {
    color: #555;
    font-weight: 300;
    text-decoration: none;
    font-size: 18px;
    margin-left: 20px;
    cursor: pointer;
    
    &:hover {
      border-bottom: 2px solid #000;
      color: #000;
    }
  }
`

export default class extends Component {
  render(){
    return(
      <NavContainer>
        <WidthContainer>
          <div><b>Thechun.xyz</b>GG;EZ</div>
          <RightContainer>
            <a href="">ตารางสอบของคุณ</a>
            <a href="">จัดตารางอ่านหนังสืออัตโนมัติ</a>
            <a href="">ออกจากระบบ</a>
          </RightContainer>
        </WidthContainer>
      </NavContainer>
    )
  }
}
