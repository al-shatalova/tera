import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

const FlexDimensionsBasics = () => {
  return (
    <View style={{ flex: 1, justifyContent:'crnter', alignItems:'center' }}>
      <View style={{ flex: 1 }}>
        <Text style={{ margin:24, fontWeight: 'bold'}}>
        Главные новости!
        </Text>
      </View>
      <View style={{ flex: 2, backgroundColor: '#CFC7F2' }}>
        <Text style={{ margin:24}}>
        Самые запоминающиеся пикники из фильмов
        </Text>
      </View>
      <View style={{ flex: 5, backgroundColor: '#A6A0C2', justifyContent:'crnter' }}>
      <Text style={{ margin:24 }}>
        Эти жаркие летние деньки идеальны, чтобы собраться с друзьями или вдвоем с любимым человеком и провести пикник в тени деревьев. Каким же вкусным может показаться обычный сэндвич, съеденный на природе. А вспомним-ка самые запоминающиеся пикники из фильмов разных эпох. 
      </Text>
      <View style={{ margin:24 }}>
        <Button 
          title="Читать далее"
          color="#625E73"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
      </View>
      </View>
    </View>
  );
};

export default FlexDimensionsBasics;

