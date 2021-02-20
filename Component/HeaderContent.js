import React from "react";
import  {View} from "react-native";
import {Header,Left,Icon,Body,Text,Right} from "native-base";

class HeaderContent extends React.Component {
    render(){
        return (
            <View>
                <Header style={{backgroundColor: "white"}}>
                    <Left>
                        <Icon name="camera" />
                    </Left>
                    <Body>
                        <Text style={{marginLeft: 70}}>
                            InstaOne
                        </Text>
                    </Body>
                    <Right>
                        <Icon name="paper-plane"/>
                    </Right>
                </Header>
            </View>
        )
    }
}

export default HeaderContent;
