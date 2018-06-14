/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image
} from 'react-native';


const {width, height} = require("Dimensions").get("window");

export default class App extends Component {
    static defaultProps = {
        rowData: []
    };

    constructor(props) {
        super(props);
        this.state = {
            rowData: this.props.rowData,
            currentIndex: 0
        }
    }

    render() {
        return (
            <View>
                {/*轮播图部分*/}
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={e => this._scrEnd(e)}
                    ref="myScroll"
                    //当拖拽开始时清除定时器
                    onScrollBeginDrag={() => clearInterval(this.timer)}
                    //当拖拽结束时开启定时器
                    onScrollEndDrag={() => this._autoScroll()}
                >
                    {this._renderImg()}
                </ScrollView>

                {/*指示器部分*/}
                <View style={styles.indicatorBox}>
                    {this._renderIndicator()}
                </View>
            </View>
        );
    }


    _renderImg() {
        const dataArr = this.state.rowData;
        const tempArr = [];
        dataArr.forEach((value, index) => {
            tempArr.push(
                <Image key={index} source={{uri: value.img}} style={styles.imgStyle} />
            )
        });

        return tempArr;
    }

    _renderIndicator() {
        const dataArr = this.state.rowData;
        let tempArr = [], sty;
        dataArr.forEach((value, index) => {
            sty = this.state.currentIndex == index ? {color: "orange"} : {color: "#fff"};
            tempArr.push(
                <Text key={index} style={[styles.indicatorStyle, sty]}>&bull;</Text>
            )

        });

        return tempArr
    }

    _scrEnd(e){
        const pageIndex = parseInt(e.nativeEvent.contentOffset.x / width);
        this.setState({
            currentIndex: pageIndex
        })
    }

    //实现自动轮播的函数
    _autoScroll() {
        let currentI = this.state.currentIndex;
        const dataArr = this.state.rowData;

        this.timer = setInterval(() => {
            if(currentI + 1 >= dataArr.length) {
                currentI = 0;
            }else {
                currentI += 1;
            }

            //拿到scrollView, 让他跟随着定时器滚动起来
            this.refs["myScroll"].scrollResponderScrollTo({x: currentI * width, y: 0, animated: true});

            this.setState({
                currentIndex: currentI
            })

        }, 2000)
    }

    componentDidMount() {
        this._autoScroll();
    }

}

const styles = StyleSheet.create({
    imgStyle: {
        width: width,
        height: 200
    },
    indicatorBox: {
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        flexDirection: "row",
        paddingLeft: 10,
        position: "absolute",
        left: 0,
        bottom: 0,
        width: width
    },
    indicatorStyle: {
        fontSize: 20,
        marginRight: 5
    }
});

