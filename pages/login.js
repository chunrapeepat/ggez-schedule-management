import React, { Component } from 'react'
import styled from 'styled-components'
import { fonts, WidthContainer, ButtonLink } from '../core/styledCollection'
import Footer from '../components/Footer'

const TopHeaderBrand = styled.h1`
  padding: 30px 0;
  display: block;
  margin: 0;
  color: #555;
  font-size: 30px;
  font-family: ${fonts.headerFont}

  @media (max-width: 500px) {
    font-size: 25px;
    padding: 25px 0;
  }
`

const Container = styled.div`
  width: 900px;
  margin: auto auto;
  display: flex;

  @media (max-width: 1000px) {
    display: block;
    width: 100%;
  }

  ${this} > div {
    flex: 1;
  }

  ${this} > div:nth-child(2) {
    margin-left: 50px;

    @media (max-width: 1000px) {
      margin-left: 0;
    }
  }

  ${this} > div > h1 {
    font-size: 70px;
    margin: 20px 0;
    font-weight: 300;
    margin-left: -5px;
    font-family: ${fonts.generalFont}

    @media (max-width: 1000px) {
      font-size: 60px;
      margin: 10px 0;
      margin-left: -5px;
    }
  }

  ${this} > div > span {
    font-size: 22px;
    color: #333;
    font-family: ${fonts.generalFont}

    @media (max-width: 1000px) {
      font-size: 20px;
    }
  }

  ${this} > div > div {
    margin-top: 30px;
    font-size: 20px;
    line-height: 30px;
    font-weight: 300;

    @media (max-width: 1000px) {
      font-size: 18px;
      margin-top: 20px;
      margin-bottom: 40px;
    }
  }
`

const LoginContainer = styled.div`
  width: calc(100% - 60px);
  padding: 30px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.58);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.58);
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.58);

  ${this} > h2 {
    margin: 0;
    font-weight: 400;
    font-family: ${fonts.generalFont}
  }

  ${this} > span {
    display: block;
    margin-top: 20px;
    font-weight: 300;
    color: #555;
  }
`


export default class extends Component {
  render(){
    return (
      <div>
        <WidthContainer>
          <TopHeaderBrand>Thechun.xyz</TopHeaderBrand>
          <Container>
            <div>
              <h1>GG;EZ</h1>
              <span>
                GG;EZ is a website that can help you manage your schedule for the exams duration, It provide interesting features such as Manage & Print your schedule, Share with your friend and a Bot system that can help you manage book-reading schedule automatically.
              </span>
              <div style={{fontFamily: 'sans-serif'}}>
                Easy Game Easy Life<br/>
                Made by Chun Rapeepat, Thailand, 2017.
              </div>
            </div>
            <div>
              <LoginContainer>
                <h2>Being part of GG;EZ</h2>
                <span>เริ่มต้นใช้งานง่ายๆเพียงแค่กดปุ่มเข้าสู่ระบบด้วยเฟสบุค และสามารถที่จะเริ่มใช้งานระบบทั้งหมดได้ทันที</span>
                <br/>
                <ButtonLink href='/auth/facebook' white bg="#3D5AFE">SIGNIN WITH FACEBOOK</ButtonLink>
              </LoginContainer>
            </div>
          </Container>
        </WidthContainer>
        <Footer />
      </div>
    )
  }
}
