import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styled from 'styled-components/native'

const BottomSheetContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Button = styled.TouchableOpacity`
  width: 150px;
  height: 50px;
  border-radius: 10px;
  background-color: #0fa;
  justify-content: center;
  align-items: center;
`

const Bottom = () => {
  return (
    <BottomSheetContainer>
      <Button>
        <Text> Welcome to React</Text>
      </Button>
    </BottomSheetContainer>
  )
}

export default Bottom
