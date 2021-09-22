import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Журнал Bright
      </Text>
      <Card style={styles.card}>
        <View style={{ flex: 2}}>
          <View style={{flex:1, justifyContent: 'center'}}>
            <Text style={{textAlign: 'left', color: '#2726FF'}}>
              Новости
            </Text>
          </View>
          <View style={{flex:3, justifyContent: 'center'}}>
            <Image 
              source={{
                uri:'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwZm9vZCUyMHN0b3JlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',}}
              style={{width: 230, height:120}}
              />
          </View>
        </View>
        <View style={{ flex: 2}} >
          <View style={{flex:1, justifyContent: 'center'}}>
            <Text style={{fontSize: 24, fontWeight: 'bold', lineHeight: 28}}>Превращаем стресс в своего помощника</Text>
          </View>
          <View style={{flex:3, justifyContent: 'center'}}>
            <Text style={{fontSize: 14}}>Исследователи Йельского университета заявляют, что люди, которые рассматривают стресс, как возможность личностного роста, отмечают улучшение качества жизни. Сегодня узнаем, как это работает и как увидеть положительные стороны стресса.</Text>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    paddingBottom: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    marginTop: 38,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'bottom',
  },
  card: {
    flex: 1,
    padding: 30
  },
});
