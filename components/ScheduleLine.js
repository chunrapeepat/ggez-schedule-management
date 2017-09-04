import React, { Component } from 'react'
import styled from 'styled-components'
import { fonts, WidthContainer } from '../core/styledCollection'

const LineContainer = styled.div`
  width: 100%;
  border-top: 1px solid #ddd;
  border-bottom: ${props => (props.withBorder) ? '1px' : '0px'} solid #ddd;

  ${this} > ${WidthContainer} {
    display: flex;
    font-family: ${fonts.generalFont}
  }

  ${this} > ${WidthContainer} > div:nth-child(1) {
    width: 200px;
    border-right: 1px solid #ccc;

    ${this} > div {
      font-weight: 500;
      font-size: 18px;
    }
  }

  ${this} > ${WidthContainer} > div:nth-child(2) {
    flex: 1;
    cursor: pointer;

    ${this} > div > h3 {
      margin: 0;
      font-weight: 500;
      font-size: 20px;
      font-family: ${fonts.generalFont}
    }

    ${this} > div > h3 > span {
      margin: 0;
      font-weight: 300;
      font-size: 18px;
      font-family: ${fonts.generalFont}
    }

    ${this} > div > span {
      margin-top: 12px;
      color: #555;
      line-height: 25px;
      display: inline-block;
      font-size: 18px;
      font-family: ${fonts.generalFont}
    }

    &:hover {
      background: #FAFAFA;
    }
  }
`

const Padding = styled.div`
  padding: 30px ${props => (props.back) ? '30px': '0'};
`

export default class extends Component {
  render(){
    return(
      <LineContainer withBorder={this.props.withBorder}>
        <WidthContainer>
          <div>
            <Padding>
              10.00 - 12.00
            </Padding>
          </div>
          <div>
            <Padding back>
              <h3>Knowledge Of Land <span>@LH1 201</span></h3>
              <span>สอบข้อเขียนเก็บคะแนน 50ข้อ 100คะแนน</span>
            </Padding>
          </div>
        </WidthContainer>
      </LineContainer>
    )
  }
}
