import React from "react";
import {Content,Card,CardItem,Left,Thumbnail,Body,Text,Right,Icon} from "native-base";
import { Image} from "react-native";

class ContentPost extends React.Component{
    render(){
        return (
            <Content>
                <Card>
                    <CardItem>
                        <Left>
                            <Thumbnail source={{uri: "https://images.pexels.com/photos/2131830/pexels-photo-2131830.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}}/>
                            <Body>
                                <Text>
                                    Ahmad
                                </Text>
                                <Text>
                                    Bekasi
                                </Text>
                            </Body>
                        </Left>
                        <Right>
                            <Icon name="grid" />
                        </Right>
                    </CardItem>
                        <CardItem cardBody>
                            <Image source={{uri: "https://images.pexels.com/photos/2260030/pexels-photo-2260030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}} style={{height:200, flex:1}} />
                        </CardItem>
                        <CardItem>
                            <Icon name="heart" />
                            <Icon name="apps" />
                            <Icon name="paper-plane" />
                        </CardItem>
                        <CardItem style={{height:10}}> 
                        <Left>
                                <Icon name="heart"/>
                                <Text>
                                    5 Likes
                                </Text>
                            </Left>
                        </CardItem>
                        <CardItem>

                            <Text>
                                Perfect photoshoot!!!
                            </Text>
                        </CardItem>
                    
                </Card>
            </Content>
        )
    }
}

export default ContentPost;