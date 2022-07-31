import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
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
  