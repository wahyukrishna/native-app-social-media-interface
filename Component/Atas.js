import React from "react";
import {Thumbnail,Card, CardItem,Content,Text} from "native-base";

const dataAtas =[
    {
        nama: "Your Story",
        gambar: "https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        nama: "Richard",
        gambar: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        nama: "Muhammad",
        gambar: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        nama: "Putri",
        gambar: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        nama: "Ahmad",
        gambar: "https://images.pexels.com/photos/2131830/pexels-photo-2131830.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        nama: "Rudi",
        gambar: "https://images.pexels.com/photos/2260030/pexels-photo-2260030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
];

class Atas extends React.Component {
    render(){
        return (
            <Content horizontal>
                {dataAtas.map((data,index)=>{
                    return(
                        <Card key={index} style={{height: 100}} transparent>
                        <CardItem style={{flexDirection: "column"}}> 
                            <Thumbnail source={{uri: data.gambar }}/>
                            <Text>{data.nama}</Text>
                        </CardItem>
                    </Card>
                    )
                })}
               
            </Content>

        )
    }
}

export default Atas;
