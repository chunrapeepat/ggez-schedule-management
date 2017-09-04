import React, { Component } from 'react'
import styled from 'styled-components'

import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Navigator from '../components/Navigator'
import ScheduleLine from '../components/ScheduleLine'
import FixedContainer from '../components/FixedContainer'
import { fonts, WidthContainer, Button } from '../core/styledCollection'

const NoContent = styled.div`
  width: 100%;
  background: #FAFAFA;
  padding: 50px 0;
  color: #777;
  line-height: 30px;
  font-family: ${fonts.generalFont}

  ${this} > div {
    font-size: 18px;
  }
`

const PanelContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`

const Heading = styled.h1`
  margin: 0;
  display: block;
  font-size: 30px;
  font-weight: 400;
  color: #333;
  padding: 50px 0;
  font-family: ${fonts.generalFont}
`

export default class extends Component {
  render(){
    return(
      <div>
        <Navigator />
        <FixedContainer>
          <Hero heading="Automatic book scheduling" />
          <PanelContainer>
            <WidthContainer>
              <Button white bg="#651FFF">START PROCESSING</Button>
              <Button>REPORT BUGS</Button>
            </WidthContainer>
          </PanelContainer>
        </FixedContainer>
        <NoContent>
          <WidthContainer>ระบบนี้มีไว้สำหรับคนที่เกิดอาการไม่รู้ว่าจะอ่านหนังสือยังไงดี วันไหนอ่านวิชาอะไร ก็ไม่ต้องคิดมากเพราะระบบนี้จะช่วยคำนวนว่าควรจะอ่านหนังสือวิชาอะไรวันไหนโดยดูข้อมูลจากหน้าตารางสอบของคุณ สามารถเริ่มใช้งานได้ทันทีโดยกดที่ปุ่ม START PROCESSING ปล. ระบบนี้อาจมีความไม่เสถียรเนื่องจากว่าใช้เทคนิคการเขียนโปรแกรมค่อนข้างยาก ดังนั้นหากพบเจอบัคต่างๆโปรดแจ้งโดยกดปุ่ม REPORT BUGS ด้านบนเพื่อทำการแก้ไขและประปรุงให้ดีขึ้นในครั้งถัดไป</WidthContainer>
        </NoContent>

        <WidthContainer>
          <Heading>Wednesday, May 2017</Heading>
        </WidthContainer>
        <ScheduleLine />
        <ScheduleLine />
        <ScheduleLine />
        <ScheduleLine />
        <ScheduleLine withBorder={true}/>

        <WidthContainer>
          <Heading>Sunday, May 2017</Heading>
        </WidthContainer>
        <ScheduleLine />
        <ScheduleLine />
        <ScheduleLine />
        <ScheduleLine />
        <ScheduleLine withBorder={true}/>

        <Footer />
      </div>
    )
  }
}
