

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TabBarIOS

} from 'react-native';


export default class Message extends Component<Props> {

    render() {
        return (
            <View style={styles.container}>
                <Text>消息页</Text>
            </View>

        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center"
    }

});
