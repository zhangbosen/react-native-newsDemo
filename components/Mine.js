

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TabBarIOS

} from 'react-native';


export default class Mine extends Component<Props> {

    render() {
        return (
            <View style={styles.container}>
                <Text>我的</Text>
            </View>

        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "yellow",
        justifyContent: "center",
        alignItems: "center"
    }

});

