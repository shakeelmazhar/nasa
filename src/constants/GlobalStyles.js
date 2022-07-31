import {StyleSheet} from 'react-native' ;
import colors from './Colors';
import dimensions from './Dimensions';


const globalStyles = StyleSheet.create({
    shadow :{
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
    },
      regularText: (size,color) => {
        return ({
          fontSize: dimensions.width(size ? size : 4),
          color: color ? color : colors.darkBlue,
            fontFamily : 'Montserrat-Regular'
        })
      },
      semiBoldText: (size,color) => {
        return ({
          fontSize: dimensions.width(size ? size : 4),
          color: color ? color : colors.darkBlue,
            fontFamily : 'Montserrat-SemiBold'
        })
      },
      boldText: (size,color) => {
        return ({
          fontSize: dimensions.width(size ? size : 4),
          color: color ? color : colors.darkBlue,
            fontFamily : 'Montserrat-Bold'
        })
      },
  topBorder: {
    borderColor: colors.boldBorderColor,
    borderWidth: 1,
    borderTopColor: colors.black,
    borderTopWidth: 4,
    borderRadius: dimensions.width(3),
    backgroundColor: colors.white
  }

});
export default globalStyles ;