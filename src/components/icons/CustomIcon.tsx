// Import React
import React, {ReactElement} from 'react';

// Import Constants
import {CUSTOM_ICON_SIZES} from '../../common/constants/icon/iconSizes';
import {BASE_COLORS} from '../../common/constants/baseColors';

export interface IconProps {
  status: BASE_COLORS;
  size?: CUSTOM_ICON_SIZES | number;
  name: ReactElement;
}

CustomIcon.defaultProps = {
  size: CUSTOM_ICON_SIZES.MEDIUM,
  status: BASE_COLORS.gray,
};

function CustomIcon(props: IconProps) {
  // Descturct Props
  const {size, name, status} = props;

  return (
    <>
      {React.cloneElement(name, {
        width: size,
        height: size,
        color: `${status}`,
      })}
    </>
  );
}

export default CustomIcon;
