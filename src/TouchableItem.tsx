import * as React from 'react';
import { StyleProp, ViewStyle, ViewProps } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = ViewProps & {
  onPress: () => void;
  onLongPress?: () => void;
  delayPressIn?: number;
  borderless?: boolean;
  pressColor: string;
  pressOpacity?: number;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export default class TouchableItem extends React.Component<Props> {
  static defaultProps = {
    pressColor: 'rgba(255, 255, 255, .4)',
  };

  render() {
    const { style, pressOpacity, children, ...rest } = this.props;
    return (
      <TouchableOpacity {...rest} style={style} activeOpacity={pressOpacity}>
        {children}
      </TouchableOpacity>
    );
  }
}
