/**
 * @description Styles for the Login component
 */

import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      chooseNetworkContainer:{
        flex: 1,
        justifyContent: 'top',
        alignItems: 'top',
        marginRight:110,
        marginTop:25,
        width:'70%'
      },
      header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor:COLORS.purple,
        width:'100%',
        height:40,
        marginTop:50,
      },
      headerTitle: {
        fontSize: SIZES.large,
        fontFamily: FONT.medium,
        color: COLORS.white,
        padding:5
      },
      headerBtn: {
        fontSize: SIZES.medium,
        fontFamily: FONT.medium,
        color: COLORS.gray,
      },
      Imagecontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
      },
      welcomeImage: {
        width: 200,
        height: 200,
        paddingBottom:10,
        backgroundColor: COLORS.dark,
        borderRadius:60
      },
    heading: {
      fontFamily: FONT.regular,
      fontSize: SIZES.xxLarge,
      color: COLORS.purple,
      textShadowColor: COLORS.white,
    //   marginBottom:2,
      paddingBottom:10
    },
    welcomeMessage: {
      fontFamily: FONT.bold,
      fontSize: SIZES.large,
      color: COLORS.white,

    },
    balanceText:{
      fontFamily: FONT.bold,
      color: COLORS.white,
      textAlign: 'center',
      position:'relative',
      transform: [{translateY: -80},{ translateX:40}],
      fontSize: SIZES.xLarge,
    },
    searchContainer: {
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      marginTop: SIZES.large,
      height: 50,
    },
    searchWrapper: {
      flex: 1,
      backgroundColor: COLORS.gray,
      marginRight: SIZES.xSmall,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: SIZES.medium,
      height: "80%",
      width: "50%",
    },
    searchInput: {
      fontFamily: FONT.regular,
      width: "100%",
      height: "100%",
      paddingHorizontal: SIZES.medium,
    },
    searchBtn: {
      width: 100,
      height: "100%",
      backgroundColor: COLORS.purple,
      borderRadius: SIZES.medium,
      justifyContent: "center",
      alignItems: "center",
    },
    btnMessage: {
        fontFamily: FONT.bold,
        fontSize: SIZES.medium,
        color: COLORS.white,
        marginTop: 2,
      },
      textContainer:{
        flexDirection: 'row',
        marginTop: 2,
        marginLeft:40,
        width:'80%',
        justifyContent: 'center',
        alignItems: 'center',
        
      },
      text:{
        fontFamily: FONT.bold,
        fontSize: SIZES.medium,
        color: COLORS.white,
      },
    toggleContainer: {
        flexDirection: 'row',
        marginBottom: 100,
      },
      toggleButton: {
        padding: 5,
        margin: 4,
        backgroundColor: 'lightgrey',
        borderRadius: 5,
      },
      activeToggle: {
        backgroundColor: COLORS.purple,
      },
      btnContainer:{
        flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 70,
    marginTop:50
      },
      circleButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: COLORS.PURPLE2, // Example background color
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center',
      },
      logsButton: {
        width: 65,
        height: 65,
        borderRadius: 15,
        borderWidth:20,
        borderBlockColor:COLORS.purple,
        backgroundColor: COLORS.PURPLE2, // Example background color
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:70,
        marginBottom: 30
      },
      profileImage:{
        width: 30,
        height: 30,
        paddingBottom:5,
        backgroundColor: COLORS.PURPLE2,
        borderRadius:13,
      },
      profileButton: {
        width: 65,
        height: 65,
        borderRadius: 15,
        borderWidth:20,
        borderBlockColor:COLORS.purple,
        backgroundColor: COLORS.PURPLE2, // Example background color
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:160,
        marginBottom: 30,
      },
      polygonImage:{
        width: 30,
        height: 30,
        paddingBottom:5,
        backgroundColor: COLORS.dark,
        borderRadius:30
      },
      sendImage:{
        width: 30,
        height: 30,
        paddingBottom:5,
        backgroundColor: COLORS.PURPLE2,
        borderRadius:25,
        transform: [{ rotate: '-50deg' }]
      },
      recieveImage:{
        width: 30,
        height: 30,
        paddingBottom:5,
        backgroundColor: COLORS.PURPLE2,
        borderRadius:25,
        transform: [{ rotate: '130deg' }]
      },
    tabsContainer: {
      width: "100%",
      marginTop: SIZES.medium,
    },
    tab: (activeJobType, item) => ({
      paddingVertical: SIZES.small / 2,
      paddingHorizontal: SIZES.small,
      borderRadius: SIZES.medium,
      borderWidth: 1,
      borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
    }),
    tabText: (activeJobType, item) => ({
      fontFamily: FONT.medium,
      color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
    }),
  });
  
  export default styles;