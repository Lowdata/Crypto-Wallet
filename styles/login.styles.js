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
      polygonImage:{
        width: 50,
        height: 50,
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
      fontSize: SIZES.xLarge,
      color: COLORS.white,
      marginTop: 2,
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
    toggleContainer: {
        flexDirection: 'row',
        marginBottom: 10,
      },
      toggleButton: {
        padding: 10,
        margin: 5,
        backgroundColor: 'lightgrey',
        borderRadius: 5,
      },
      activeToggle: {
        backgroundColor: COLORS.purple,
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