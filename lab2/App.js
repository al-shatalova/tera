import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Flex = () => {
  return (
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
      <View style={{ flex: 1,}}>
        <Text style={{textAlign:'center', fontSize:20, fontWeight:"bold", marginTop:30}}>5 книжных новинок октября</Text>
      </View>
      <View style={{ flex: 2, backgroundColor: "#D3D3D3", padding:10 }}> 
        <Text style={{textAlign:'center', fontSize:16, marginTop:20}}>
        «Кадиш.com» Натан Ингландер. Издательство «Книжники»
        </Text>
      </View>
      <View style={{ flex: 5, backgroundColor: "#A9A9A9", padding:10 }}>
        <Text style={{textAlign:'center', marginTop:20, fontSize:14}}>
          Ироничная новелла Натана Ингландера, две личные истории культовой Патти Смит, репортаж британской журналистки о будущем человечества, дебютный роман Оушена Вуонга и журналистское расследование о создании «Моссада». В нашей подборке рассказываем о пяти захватывающих книжных новинках, которые достойны того, чтобы появиться на ваших полках.
        </Text>
      </View>
      <View style={{flex:1}}>
        <Button title="Читать далее" style={{backgroundColor:'#2096F3'}}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Flex;