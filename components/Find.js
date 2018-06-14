

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TabBarIOS

} from 'react-native';


export default class Find extends Component<Props> {

    render() {
        return (
            <View style={styles.container}>
                <Text>首页</Text>
            </View>

        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center"
    }

});

