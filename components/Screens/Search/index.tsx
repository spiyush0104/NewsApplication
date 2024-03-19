import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Platform
} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FlatList, TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {NativeViewGestureHandler} from 'react-native-gesture-handler';
import styles from '../../Style/styles';
import { useNavigation } from '@react-navigation/native';
import Home from '../Home';

const SearchScreen = () => {
  const navigation = useNavigation();
  const hourArray = [
    {
      id: 1,
      content: '1 hour',
    },
    {
      id: 2,
      content: '2 hour',
    },
    {
      id: 3,
      content: '4 hour',
    },
    {
      id: 4,
      content: '8 hour',
    },
    {
      id: 5,
      content: '12 hour',
    },
    {
      id: 6,
      content: '16 hour',
    },
    {
      id: 7,
      content: '20 hour',
    },
    {
      id: 8,
      content: '24 hour',
    },
  ];

  const CategoriesArrays = [
    {
      id: 1,
      image: require('../../photos/videocam-outline.png'),
      title: 'Video',
    },
    {
      id: 2,
      image: require('../../photos/magzine.png'),
      title: 'magazine',

    },
    {
      id: 3,
      image: require('../../photos/viral.png'),

      title: 'Viral',
    },
    {
      id: 4,
      image: require('../../photos/trending.png'),

      title: 'Trending',
    },
    {
      id: 5,
      image: require('../../photos/wildlife.png'),

      title: 'Wild life',
    },
    {
      id: 7,
      image: require('../../photos/game.png'),

      title: 'Sports',
    },
    {
      id: 8,
      image: require('../../photos/isro.png'),

      title: 'Isro',
    },
  ];

  const handleBackPress=()=>{
    navigation.goBack();
    
  }
  const handleCategoriesPress=()=>{

  }
  return (
    <View style={{flex: 1}}>
      {/* header container */}
      <View
        style={{
          height: hp('22%'),
          // marginTop: hp('8%'),
          marginTop: Platform.OS=='ios' ? hp('4%') : 0,
          backgroundColor: '#4b7bec',
        }}>
        <View
          style={{
            height: hp('10%'),
            display: 'flex',
            flexDirection: 'row',
          }}>
          <TouchableOpacity style={{justifyContent: 'center'}} onPress={handleBackPress}>
            <Image
              style={{height: 35, width: 35}}
              source={require('../../photos/backarrow.png')}
            />
          </TouchableOpacity>
          <View style={{justifyContent: 'center', paddingLeft: wp('4%')}}>
            <Text style={{fontSize: 20, fontWeight: '600', color: 'white'}}>
              Back
            </Text>
          </View>
        </View>
        <View
          style={{
            height: hp('8%'),
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
          }}>
          <TextInput
            style={{
              height: hp('7%'),
              width: wp('90%'),
              backgroundColor: 'white',
              borderRadius: 9,
              fontSize: 18,
              paddingLeft: 20,
            }}
            // onChangeText={}
            // value={text}
            placeholder="  Search"
            placeholderTextColor="#999999"
          />
          <Image
            style={{height: 30, width: 30, position: 'absolute', right: 40}}
            source={require('../../photos/search-outline.png')}
          />
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            height: hp('5%'),
            width: wp('100%'),
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: '300',
              textAlign: 'center',
              paddingBottom: 5,
            }}>
            Search keywords ex: Modi,Politics,Health,Stocks,....
          </Text>
        </View>
      </View>

      {/* time section start from here */}

      <View
        style={{
          justifyContent: 'center',
          height: hp('28%'),
          width: wp('100%'),
          alignItems: 'center',
        }}>
        <View
          style={{
            height: hp('25%'),
            width: wp('90%'),
          }}>
          <View
            style={{
              height: hp('8%'),
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'row',
            }}>
            <View>
              <Image
                style={{height: 30, width: 30}}
                source={require('../../photos/stopwatch-outline.png')}
              />
            </View>
            {/* time text start from here */}
            <View style={{paddingLeft: 10}}>
              <View>
                <Text style={{fontSize: 12, color: 'grey', fontWeight: '600'}}>
                  Select Stories Before
                </Text>
              </View>
              <Text style={{fontSize: 15, color: 'grey', fontWeight: '700'}}>
                Between last 24 hours
              </Text>
              <View></View>
            </View>
          </View>
          <View
            style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            {hourArray.map((item, index) => {
              return (
                <View
                  style={{display: 'flex', flexDirection: 'row'}}
                  key={item.id}>
                  <TouchableOpacity style={styles.hour}>
                    <Text style={{fontWeight: '700'}}>{item.content}</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>
      </View>

      {/* categories secion start from here */}
      <View
        style={{
          justifyContent: 'center',
          height: hp('50%'),
          width: wp('100%'),
          alignItems: 'center',
        }}>
        <View style={{height: hp('49%'), width: wp('90%')}}>
          <View style={{height: hp('6%'), justifyContent: 'center'}}>
            <Text style={{fontWeight: '700', fontSize: 16, color: 'grey'}}>
              Categories
            </Text>
          </View>

          {/* scrollview start from here  */}
          <ScrollView>
            {CategoriesArrays.map(category => (
              <TouchableOpacity
                key={category.id}
                style={{
                  height: hp('7%'),
                  alignContent: 'center',
                  flexDirection: 'row',
                  borderBottomWidth: 0.2,
                }} onPress={handleCategoriesPress}>
                <View style={{justifyContent: 'center'}}>
                  <Image
                    style={{
                      height: 25,
                      width: 25,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    source={category.image}
                  />
                </View>
                <View style={{justifyContent: 'center', paddingLeft: 30}}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 14,
                      fontWeight: '600',
                      color: 'black',
                    }}>
                    {category.title}
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    position: 'absolute',
                    right: 10,
                  }}>
                  <Image
                    style={{
                      height: 25,
                      width: 25,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    source={require('../../photos/chevron-forward-outline.png')}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default SearchScreen;
