import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  selectlanguageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('15%'),
    width: wp('90%'),
    margin: 20,
    padding: 20,
  },
  flex1: {
    flex: 1,
  },
  selectlanguagetext: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Poppins',
  },
  M20: {
    margin: 20,
  },
  hindiLanguageContainer: {
    // justifyContent: 'center',
    alignItems: 'center',
    height: hp('15%'),
    width: wp('90%'),
    margin: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: 'green',
    display: 'flex',
    flexDirection: 'row',
  },
  hinditext: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: '600',
    fontFamily: 'Poppins',
  },
  hindiImage: {
    width: 70,
    height: 70,
  },
  flex1_color:{
    justifyContent:'center',
    alignContent:'center',
    display:'flex',
    // flex:1,
    // backgroundColor:'black'
  },
  image:{
    height:hp('37%'),
    width:wp('100%'),
    resizeMode: 'cover'
  },
  bottomIcon:{
    height:25,
    width:25,
  },
  iconPadding:{
    padding:5
  },
  hour:{
    height: hp('5%'),
    width: wp('25%'),
    borderWidth:0.3,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    margin:5
  }
});

export default styles;
