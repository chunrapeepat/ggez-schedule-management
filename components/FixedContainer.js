import React, { Component } from 'react'
import styled from 'styled-components'

const FixedContainer = styled.div`
  padding-top: 70px;
`

export default class extends Component {
  render(){
    return(
      <FixedContainer>
        {this.props.children}
      </FixedContainer>
    )
  }
}
