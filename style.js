import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgtoundColor: '#ffff',
    },

    title:{
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 23,
    },

    buttonContainer:{
        marginVertical: 10,
        fontWeight: 'bold',
        marginBottom: 10,
        borderRadius: 8,
    },

    input: {
        borderColor: 'gray',
        borderRadius: 8,
        width: '50%',
        marginBottom: 12,
        borderWidth: 1,
        padding: 12,
  },

    text: {
        fontSize: 16,
        color: 'black',
        marginBottom: 16,
    },

})