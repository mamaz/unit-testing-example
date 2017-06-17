import React, { PropTypes } from 'react';
import { TouchableHighlight, Text } from 'react-native';

const styles = {
  button: {

  }
};

const Button = (props) => {
  const { onPress, text } = props;
  return (
    <TouchableHighlight
      style={styles.button}
      onPress={onPress}
    >
      <Text>{text}</Text>
    </TouchableHighlight>
  );
};

Button.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string
};

export default Button;
