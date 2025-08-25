import { Pressable, Text } from 'react-native';
import { styles } from './styles';
import { UIButtonProps } from './props.types';

export const UIButton: React.FC<UIButtonProps> = ({
  text,
  buttonStyle,
  buttonTextStyle,
  onClick,
}) => {
  return (
    <Pressable style={[styles.button, buttonStyle]} onPress={onClick}>
      <Text style={[styles.buttonText, buttonTextStyle]}>{text}</Text>
    </Pressable>
  );
};
