

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    ListView,
    TouchableOpacity,
    Image

} from 'react-native';

import Lunbo from './subComponents/Lunbo';
import Detail from './home/Detail';

export default class Home extends Component {

    static defaultProps = {
        url_api: 'http://c.m.163.com/nc/article/headline/T1348647853363/0-20.html?from=toutiao&fn=1&prog=LTitleA&passport=&devId=nTM86EPlcxZu09VdpTEh6aR3%2B%2FQX6x8vHBD3ne3k5bbgOrg%2FIP5DcguSDmtYyWbs&offset=0&size=20&version=14.0&spever=false&net=wifi&lat=DUH4Hf95lyIDaAI03C3RSA%3D%3D&lon=HJ4tj6FL5wRHQxcf5GLEcg%3D%3D&ts=1470728804&sign=1H8K3yy9bMXakmxAlZ9P86meraJtjKQFz5vJuwhjNyl48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstore',
        key_word: 'T1348647853363'
    };

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
           rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: ds.cloneWithRows(["暂时没有数据~"]),
            //轮播图盒子
            adArr: []
        };

    }

    render() {
        return (
                <ListView
                    dataSource={this.state.dataSource}
                    renderHeader={() => this._renderHeader(this.state.adArr)}
                    renderRow={this._renderRow.bind(this)}
                />

            
        )
    }

    componentDidMount() {
        fetch(this.props.url_api)
            .then(response => response.json())
            .then(res => {
                const dataArr = res[this.props.key_word];
                const tempArr = this.state.adArr;
                dataArr.forEach((val, idx) => {
                   if(val.img) {
                       tempArr.push(val)
                   }
                });
                

                //更新状态机
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(dataArr),
                    adArr: tempArr
                });


            })
    }

    _renderHeader(data) {
        return (
            <Lunbo rowData={data} />
        )
    }


    _renderRow(rowData, sectionId, rowId) {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() => this._pushToDetail(rowData.docid)}
            >

                {/*左边*/}
                <Image source={{uri: rowData.img}} style={styles.img} />

                {/*右边*/}
                <View style={styles.right}>
                    {/*右上*/}
                    <Text numberOfLines={1} style={{fontWeight: "bold"}}>{rowData.title}</Text>

                    {/*右下*/}
                    <View style={styles.rightDown}>
                        <Text style={{color: "red"}}>{rowData.source}</Text>
                        <Text>{rowData.ptime}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )

    }

    _pushToDetail(docid) {
        this.props.navigator.push({
            title: "新闻详情",
            component: Detail,
            passProps: {docid}
        })

    }
    
}

const styles = StyleSheet.create({

    container: {
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        flexDirection: "row",
        padding: 10
    },
    img: {
        width: 70,
        height: 70,
        backgroundColor: "skyblue",
        borderRadius: 5
    },
    right: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "space-around"
    },
    rightDown: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
});
