import React from 'react';
import { SafeAreaView, Text, Image, View } from 'react-native';

const HelloWorldApp = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Image
          source={{
            uri: 'https://i.pinimg.com/originals/cc/0a/04/cc0a0435b2e7669cfff322790d439e7d.jpg',
          }}
          style={{ width: 200, 
                   height: 400 }}
        />                               
      <Text>Helena Claudino</Text>
    </SafeAreaView>
  )
}
export default HelloWorldApp;