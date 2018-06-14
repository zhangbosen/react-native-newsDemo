import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window');

const styles = {
    image: {
        width,
        // flex: 1
    }
}

export default class extends Component {
  render () {
    return (
        <Swiper
            height={200}
            onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
            dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
            activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
            paginationStyle={{
                bottom: 0, left: null, right: 10
            }}
            loop
        >
              <View title={<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}>
                <Image resizeMode='stretch' style={styles.image} source={require('./img/1.jpg')} />
              </View>

              <View title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}>
                <Image resizeMode='stretch' style={styles.image} source={require('./img/2.jpg')} />
              </View>

              <View title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}>
                <Image resizeMode='stretch' style={styles.image} source={require('./img/3.jpg')} />
              </View>

              <View title={<Text numberOfLines={1}>Learn from Kim K to land that job</Text>}>
                <Image resizeMode='stretch' style={styles.image} source={require('./img/4.jpg')} />
              </View>
        </Swiper>
    )
  }
}
