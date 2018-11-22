import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
    unresolvedViewA: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    unresolvedViewB: {
      flex: 1,
      justifyContent: 'center',
    },
    unresolvedText: {
      margin: 12,
      color: 'grey',
    },
    mainView: {
      backgroundColor : 'white',
    },
    textView: {
      backgroundColor : 'white',
      borderBottomWidth:0,
      paddingTop: 18,
      paddingLeft: 4,
      paddingBottom: 0,
      borderColor: 'white',
      borderWidth: 0,
      marginBottom: 0
    },
    text: {
      fontWeight: 'bold',
      fontSize: 19,
      color: '#3363C2',
      margin: 0,
      borderColor: 'white',
      borderWidth: 0,
      padding: 0,
      paddingLeft: 18,
    },
    iconHeader: {
      backgroundColor: 'white',
      borderColor: 'white',
      borderWidth : 0,
      margin: 0,
      marginLeft: 8,
    },
    scrollView: {
      backgroundColor : 'white',
      borderWidth: 0,
      borderColor: 'white',
      marginBottom: 60,
    },
    list: {
      borderWidth: 0,
      borderColor: 'white',
      backgroundColor : 'white',
      margin: 0,
      padding: 0,
      marginTop: 0
    },
    divider: {
      height: 0.75,
      backgroundColor: '#CCCCCC',
      margin: 0,
      padding: 0,
      width: DEVICE_WIDTH-71,
      zIndex: 100,
    },
    dividerContainer: {
      flex: 1,
      margin: 0,
      padding: 0,
      flexDirection: 'row',
      justifyContent: 'flex-end'
    },
    listBottom: {
      borderWidth: 0,
      borderColor: 'white',
      backgroundColor : 'white',
      margin: 0,
      padding: 0,
      marginTop: 0
    },
    viewBottom: {
      padding: 0
    },
    listItem: {
      height: 70,
      borderTopWidth:0,
      borderColor: 'white',
      borderBottomWidth: 0,
      backgroundColor: 'white',
      margin: 0,
      padding: 0
    },
    headerListItem: {
      height: 50,
      borderTopWidth:0,
      borderColor: 'white',
      borderBottomWidth: 0,
      backgroundColor: 'white',
      margin: 0,
      padding: 0
    },
    buttonText: {
      color: 'white',
      backgroundColor: 'transparent',
    },
    buttonContainer1: {
      position: 'absolute',
      alignItems:'center',
      justifyContent:'center',
      alignSelf: 'flex-end',
      bottom: 5,
      left: 20,
      backgroundColor: '#8DBDF5',
      width: DEVICE_WIDTH - 40,
      marginTop: 5,
      marginBottom: 5,
      height: 40,
      borderRadius: 20,
      zIndex: 100,
    },
    icon: {
      backgroundColor: 'white',
      borderColor: 'white',
      borderWidth : 0
    }
});
