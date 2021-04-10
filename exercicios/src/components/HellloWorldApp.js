import React from 'react';
import {SafeAreaView, FlatList, Text, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const HelloWorldApp = () => {
  return (
    <SafeAreaView
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={{
          uri:
            'https://i.pinimg.com/originals/cc/0a/04/cc0a0435b2e7669cfff322790d439e7d.jpg',
        }}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{width: 200, height: 400}}
      />

      <FlatList
        data={[
          {key: 'Amanda Claudino'},
          {key: 'Helena Claudino'},
          {key: 'Ademilson Nunes'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </SafeAreaView>
  );
};
export default HelloWorldApp;
