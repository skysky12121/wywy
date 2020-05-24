import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'

export default class App3 extends Component {
    
    render() {
        return (
            <View style={{
                justifyContent: 'center',
                alignItems: 'center', height: 210, justifyContent: "space-between", flexDirection: 'column'
            }}>
              
                <Image style={{ width:210, height: 210 }} source={{uri: this.props.route.params.item.img}} />
               <Text>歌曲名称：{this.props.route.params.item.name}</Text>
               <Text>歌曲：{this.props.route.params.item.singer}</Text>
            </View>
        )
    }
}

