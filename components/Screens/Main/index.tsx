import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  TextInput,
  ScrollView,
} from 'react-native';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Home from '../Home';
import {useNavigation} from '@react-navigation/native';
import SettingsComp from '../Settings';
const Drawer = createDrawerNavigator();

const MainScreen = () => {
  console.log('Main screen ');
  const navigation = useNavigation();
  const shadowStyle = Platform.select({
    ios: {
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 8},
      shadowOpacity: 0.2,
      shadowRadius: 15,
    },
    android: {
      elevation: 4,
    },
  });
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
  const handleNewsPress=()=>{
    navigation.goBack();
  }
  const handleLanguageSelect=()=>{

  navigation.navigate('SelectLanguage')
  }

  const handleSettingPress=()=>{
    navigation.navigate('SettingsComp')
  }

  const storename=()=>{
    
  }
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          // marginTop: hp('8%'),
          marginTop: Platform.OS=='ios' ? hp('5%') : 0,
          height: hp('8%'),
          flexDirection: 'row',
          backgroundColor: 'white',
          borderBottomWidth: 0.1,
          ...shadowStyle,
        }}>
        <TouchableOpacity onPress={handleSettingPress}
          style={{justifyContent: 'center', paddingLeft: wp('8%')}}>
          <Image
            style={{height: 25, width: 25}}
            source={require('../../photos/setting.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            height: hp('8%'),
            justifyContent: 'center',
            position: 'absolute',
            right: 1,
            paddingRight: wp('6%'),
          }} onPress={handleNewsPress}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 20,
                textAlign: 'center',
                paddingRight: wp('2%'),
                color: '#3498db',
              }}>
              News
            </Text>
            <View style={{}}>
            <Image
              style={{height: 25, width: 25,top:3}}
              source={require('../../photos/arrow-forward-outline-blue.png')}
            />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      {/* profile section start from here */}

      <View
        style={{
          height: hp('9%'),
          alignItems: 'center',
          paddingLeft: wp('4%'),
          flexDirection: 'row',
        }}>
        <View>
          <Image
            style={{height: 40, width: 40}}
            source={require('../../photos/person-circle-outline.png')}
          />
        </View>

        <View style={{paddingLeft: 20}}>
          <TextInput
            style={{height: 20, fontSize: 18}}
            placeholder="enter your name"
            keyboardType="numeric"
            onChange={storename}
          />

          <TextInput
            style={{height: 20, fontSize: 18, paddingTop: 10}}
            placeholder="enter your email"
            keyboardType="numeric"
          />
        </View>
        <View style={{paddingBottom: 20, paddingLeft: 10}}>
          <Image
            style={{height: 20, width: 20}}
            source={{
              uri: 'https://png.pngtree.com/png-vector/20190927/ourmid/pngtree-pencil-icon-png-image_1753753.jpg',
            }}
          />
        </View>
      </View>
      <TouchableOpacity onPress={handleLanguageSelect}
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: hp('9%'),
          alignItems: 'center',
          paddingLeft: wp('6%'),
          backgroundColor: 'white',
        }}>
        <Image
          style={{height: 22, width: 22}}
          source={require('../../photos/viral.png')}
        />
        {/* select language code hete */}
        <View style={{paddingLeft: wp('9%')}}>
          <Text>select your language</Text>
          <Text style={{color: '#3498db', paddingTop: 5}}>Hindi</Text>
        </View>
        <View style={{position: 'absolute', right: 0, paddingRight: wp('4%')}}>
          <Image
            style={{height: 30, width: 30}}
            source={require('../../photos/chevron-forward-outline.png')}
          />
        </View>
      </TouchableOpacity>

      {/* location section start from here */}

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: hp('9%'),
          alignItems: 'center',
          paddingLeft: wp('6%'),
          backgroundColor: 'white',
          marginTop: 5,
        }}>
        <Image
          style={{height: 22, width: 22}}
          source={require('../../photos/location.png')}
        />
        {/* select language code hete */}
        <View style={{paddingLeft: wp('9%')}}>
          <Text>your location showing</Text>
          <Text style={{color: '#3498db', paddingTop: 5}}>Uttar pradesh</Text>
        </View>
        <View style={{position: 'absolute', right: 0, paddingRight: wp('4%')}}>
          <Image
            style={{height: 30, width: 30}}
            source={require('../../photos/chevron-forward-outline.png')}
          />
        </View>
      </View>
      {/* Categories section start from here */}

      <View style={{height: hp('17%'), paddingLeft: '6%'}}>
        <Text style={{fontSize: 20, paddingTop: 10}}>Categories</Text>
        <ScrollView horizontal={true} style={{paddingTop: hp('4%')}}>
          {CategoriesArrays.map(category => (
            <View key={category.id} style={{height: hp('10%'), width: wp('25%')}}>
              <Image style={{height: 40, width: 40}} source={category.image} />
              <Text style={{paddingTop: hp('0.7%')}}>{category.title}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      {/* list section start */}

      {CategoriesArrays.map(category => (
        <View key={category.id}
          style={{
            height: hp('6%'),
            paddingLeft: wp('6%'),
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 0.2,
          }}>
          <Image style={{height: 30, width: 30}} source={category.image} />
          <Text style={{paddingLeft: wp('8%')}}>{category.title}</Text>

          <Image
            style={{
              height: 30,
              width: 30,
              position: 'absolute',
              right: wp('3%'),
            }}
            source={require('../../photos/chevron-forward-outline.png')}
          />
        </View>
      ))}
    </View>
  );
};

export default MainScreen;
