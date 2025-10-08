import { View, Text, Button } from "react-native";
import styles from "../style";
import axios from "axios";


export default function ReviewPage({ route, navigation }) {
    const { formData } = route.params;

    const handleSubmit = async ()=> {
        try {
            const response = await axios.post(
                "http://192.168.30.109:8000/registration/api/register/", formData
            );
            console.log(response.data);
        }catch (error){
            console.error(error.response?.data || error.message);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Review Your Information</Text>
            <Text style={styles.text}>First Name: {formData.first_name}</Text>
            <Text style={styles.text}>Last Name: {formData.last_name}</Text>
            <Text style={styles.text}>Email: {formData.email}</Text>
            <Text style={styles.text}>Gender: {formData.gender}</Text>
            <Text style={styles.text}>Password: {formData.password}</Text>

            <View style={styles.buttonContainer}>
                <Button title="Edit" onPress={() => navigation.navigate('Register')} />
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Submit" onPress={handleSubmit} />
            </View>

        </View>
    );
}