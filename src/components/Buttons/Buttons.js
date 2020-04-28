import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default props => {
    let style = [styles.button];
    if(props.double) style.push(styles.double);
    if(props.triple) style.push(styles.triple);
    if(props.operation) style.push(styles.operation);

    return (
        <TouchableOpacity 
            onPress={() => props.onClick(props.title)}
        >
            <Text style={style}>{props.title}</Text>
        </TouchableOpacity>
    );
}