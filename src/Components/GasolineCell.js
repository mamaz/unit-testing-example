import React, { PropTypes } from 'react';
import { View, Text, Image } from 'react-native';

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  left: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  image: {
    marginLeft: 10,
    width: 20,
    height: 20
  },
  title: {
    marginLeft: 10
  },
  price: {
    marginRight: 10
  }
};

const GasolineCell = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image source={{ uri: props.img }} style={styles.image} />
        <Text style={styles.title}>{props.title}</Text>
      </View>

      <View style={styles.right}>
        <Text style={styles.price}>{props.price}</Text>
      </View>
    </View>
  );
};

GasolineCell.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string
};
export default GasolineCell;
