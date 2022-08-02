import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

// Dimensions is componet that uses a package for calculating Screen dimensions
// This is being used for responsive UI
const dimensions = {
 width: (num) => {
    if (widthPercentageToDP(100) < heightPercentageToDP(100)) {
      return widthPercentageToDP(num);
    } else {
      return heightPercentageToDP(num);
    }
  },
  height: (num) => {
    return heightPercentageToDP(num);
  }
}
  
export default dimensions;
  