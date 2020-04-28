import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#f0f0f0',
        width: Dimensions.get('window').width / 4,
        height: Dimensions.get('window').width / 4,
        textAlign: 'center',
        paddingTop: 20,
        borderWidth: 1,
        borderColor: '#888',
        color: '#000',
    },

    double: {
        width: (Dimensions.get('window').width / 4) * 2,
    },

    triple: {
        width: (Dimensions.get('window').width / 4) * 3,
    },

    operation: {
        backgroundColor: '#fa8231',
        color: '#fff',
    },  
});

export default styles;