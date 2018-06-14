
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TabBarIOS
    
} from 'react-native';


export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            flag: 0
        }
    }

    render() {
        return (
            <TabBarIOS barTintColor="skyblue" tintColor="yellow" translucent={true}>

                <TabBarIOS.Item badge="曾经" systemIcon="bookmarks" onPress={() => this._changeNum(0)} selected={this.state.flag == 0}>
                    <View style={{flex: 1,backgroundColor: "blue", alignItems: "center", justifyContent: "center"}}>
                        <Text>第一个页面</Text>
                    </View>
                </TabBarIOS.Item>

                <TabBarIOS.Item systemIcon="contacts" onPress={() => this._changeNum(1)} selected={this.state.flag == 1}>
                    <View style={{flex: 1,backgroundColor: "red", alignItems: "center", justifyContent: "center"}}>
                        <Text>第二个页面</Text>
                    </View>
                </TabBarIOS.Item>

                <TabBarIOS.Item systemIcon="downloads" onPress={() => this._changeNum(2)} selected={this.state.flag == 2}>
                    <View style={{flex: 1,backgroundColor: "pink", alignItems: "center", justifyContent: "center"}}>
                        <Text>第三个页面</Text>
                    </View>
                </TabBarIOS.Item>

                <TabBarIOS.Item systemIcon="favorites" onPress={() => this._changeNum(3)} selected={this.state.flag == 3}>
                    <View style={{flex: 1,backgroundColor: "purple", alignItems: "center", justifyContent: "center"}}>
                        <Text>第四个页面</Text>
                    </View>
                </TabBarIOS.Item>

            </TabBarIOS>
        )
    }

    _changeNum(n) {
        this.setState({
            flag: n
        })

    }
}

const styles = StyleSheet.create({

});
