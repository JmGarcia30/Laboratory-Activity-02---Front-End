import {useState}  from "react";
import {View, Text, TextInput, Button, Alert} from "react-native"
import styles from "../style";
import axios from "axios";

export default function EditUserPage({route, navigation}){
    const {user} = route.params;

    const [first_name, setFirstName] = useState(user.first_name);
    const [last_name, setLastName] = useState(user.last_name);
    const [email, setEmail] = useState(user.email);
    const [gender, setGender] = useState(user.gender);

    const handleUpdate = () => {
        if(!first_name || !last_name || !email || !gender){
            Alert.alert("Error","Please fill in all required fields");
            return;
        }

        axios.put(`http://192.168.30.109:8080/registration/api/users/${user.id}/`, {
            first_name: first_name,
            last_name: last_name,
            email: email,
            gender: gender,
        })
        .then(()=>{
            Alert.alert("Success", "User updated successfully");
            navigation.goBack();
        })
        .catch((error)=>{
            console.error(error);
            Alert.alert("Error", "Failed to update user");
        });
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Edit User Page</Text>
            <TextInput
                placeholder="First Name"
                value={first_name}
                style={styles.input}
                onChangeText={setFirstName}
            />
            <TextInput
                placeholder="Last Name"
                value={last_name}
                style={styles.input}
                onChangeText={setLastName}
            />
            <TextInput
                placeholder="Email"
                value={email}
                style={styles.input}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder="Gender"
                value={gender}
                style={styles.input}
                onChangeText={setGender}
            />
            <Button title="Update" onPress={handleUpdate} />
        </View>
    )
}