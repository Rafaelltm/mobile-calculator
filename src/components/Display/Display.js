import React from 'react'
import { Text, View } from 'react-native'

import styles from './styles';

export default props => 
    <View style={styles.container}>
        <Text style={styles.display}
            numberOfLines={1}>{props.value}</Text>
    </View>