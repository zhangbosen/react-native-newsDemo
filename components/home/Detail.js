
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    WebView
} from 'react-native';


export default class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            html: "<p>网络请求中...</p>"
        }
    }
    
    render() {
        return (
            <WebView
                automaticallyAdjustContentInsets={true}
                source={{html: this.state.html, baseUrl: ""}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={true}
            />

        )
    }

    componentDidMount() {
        const api = "http://c.m.163.com/nc/article/" + this.props.docid + "/full.html";
        fetch(api)
            .then(response => response.json())
            .then((resData) => {
                const obj = resData[this.props.docid];
                console.log(obj);
                let body = obj.body;
                const imgList = obj.img;
                imgList.forEach((val, idx) => {
                    const src = val.src, ref = val.ref;

                    const htmlImg = "<img src='"+ src +"' width='100%' />";
                    // console.log(htmlImg);

                    body = body.replace(ref, htmlImg);


                });


                this.setState({
                    html: body
                })
            })
    }

    
}

const styles = StyleSheet.create({

});
