
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    NavigatorIOS

} from 'react-native';

import Home from './components/Home';
import Message from './components/Message';
import Find from './components/Find';
import Mine from './components/Mine';


export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            flag: ""
        }
    }

    render() {
        return (
            <TabBarIOS tintColor="rgba(255, 130, 1, 1.0)">

                <TabBarIOS.Item
                    onPress={() => this.setState({flag: "home"})}
                    selected={this.state.flag == "home"}
                    icon={{uri: "tabbar_home"}}
                    selectedIcon={{uri: "tabbar_home_highlighted"}}
                    title="首页"
                >
                    <NavigatorIOS
                        initialRoute={{
                            component: Home,
                            title: "首页新闻",
                        }}
                        style={{flex: 1}}
                    />
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    onPress={() => this.setState({flag: "message"})}
                    selected={this.state.flag == "message"}
                    icon={{uri: "tabbar_message_center"}}
                    selectedIcon={{uri: "tabbar_message_center_highlighted"}}
                    title="消息"
                >
                    <NavigatorIOS
                        initialRoute={{
                            component: Message,
                            title: "消息页"
                        }}
                        style={{flex: 1}}
                    />
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    onPress={() => this.setState({flag: "find"})}
                    selected={this.state.flag == "find"}
                    icon={{uri: "tabbar_discover"}}
                    selectedIcon={{uri: "tabbar_discover_highlighted"}}
                    title="发现"
                >
                    <NavigatorIOS
                        initialRoute={{
                            component: Find,
                            title: "发现页"
                        }}
                        style={{flex: 1}}
                    />
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    onPress={() => this.setState({flag: "mine"})}
                    selected={this.state.flag == "mine"}
                    icon={{uri: "tabbar_profile"}}
                    selectedIcon={{uri: "tabbar_profile_highlighted"}}
                    title="我的"
                >
                    <NavigatorIOS
                        initialRoute={{
                            component: Mine,
                            title: "我的"
                        }}
                        style={{flex: 1}}
                    />
                </TabBarIOS.Item>

            </TabBarIOS>
        )
    }
    
}



const styles = StyleSheet.create({


});
