/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {View} from "react-native"
import HeaderContent from "./Component/HeaderContent";
import Atas from "./Component/Atas";
import ContentPost from "./Component/ContentPost"
import Footers from "./Component/Footers"

class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <HeaderContent />
        <View style={{height: 100}}>
        <Atas/>
        </View>
        <ContentPost />
        <Footers />
      </View>      
    )
  }
}

export default App;
