import * as React from 'react';
import {
  Text, 
  View,
  SafeAreaView,
  Image } from 'react-native';

import Carousel from 'react-native-snap-carousel';
import heart from './Images/heart.png';


export default class App extends React.Component {

 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"Item 1",
              text: "Text 1",
              image: "require('./Images/heart.png')",
          },
          {
              title:"Item 2",
              text: "Text 2",
              image: './Images/heart.png',
          },
          {
              title:"Item 3",
              text: "Text 3",
              image: './Images/heart.png',
          },
          {
              title:"Item 4",
              text: "Text 4",
              image: './Images/heart.png',
          },
          {
              title:"Item 5",
              text: "Text 5",
              image: './Images/heart.png',
          },
        ]
      }
    }

    _renderItem({item,index}){
        return (
          <View style={{
              backgroundColor:'floralwhite',
              borderRadius: 5,
              height: 250,
              padding: 50,
              marginLeft: 25,
              marginRight: 25, 
              marginTop: 200,
              }}>
            {/* <Text style={{fontSize: 30}}>{item.title}</Text>
            <Text>{item.text}</Text> */}
            <Image style={{ width: 50, height: 50 }} source={require(item.title)}/>
          </View>

        )
    }

    render() {
        return (
          <SafeAreaView style={{flex: 1, backgroundColor:'rebeccapurple', paddingTop: 50, }}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={420}
                  itemWidth={350}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    }
}


// import React, {Component} from 'react';
// import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Item, Bullets } from 'react-native';
// import heart from './Images/heart.png';
// import Carousel from 'react-native-snap-carousel';



// export default class HomePage extends Component {
//   _renderItem = ({item, index}) => {
//     return (
//         <View style={styles.slide}>
//             <Text style={styles.title}>{ item.title }</Text>
//         </View>
//     );
// }

// render () {
//     return (
//         <Carousel
//           ref={(c) => { this._carousel = c; }}
//           data={this.state.entries}
//           renderItem={this._renderItem}
//           sliderWidth={sliderWidth}
//           itemWidth={itemWidth}
//         />
//     );
// }
// }


// export default function HomePage() {
//   return (
//     <SafeAreaView>
//       <ScrollView
//         horizontal={true}
//         showsHorizontalScrollIndicator={false}
//         scrollEventThrottle={200}
//         decelerationRate='fast'
//         pagingEnabled
//       >
//         {/* <Item />
//         <Item />
//         <Item />
//         <Bullets /> */}
//       </ScrollView>
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create ({
//   container: {
//     flex: 1,
//   },
//   heart: {
//     marginTop: 100,
//     width: 500,
//     height: 500,
//   }
// })
