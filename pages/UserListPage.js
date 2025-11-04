import {View, Text, Button, ActivityIndicator, FlatList, Alert} from 'react-native';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import styles from '../style';

export default function UserListPage(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("http://192.168.30.109:8000/registration/api/users/")
        .then((res) => {
            setUsers(res.data);
            setLoading(false);
        })
        .catch((error) => {
            console.error(err);
            setLoading(false);
        })
    }, []);

    if (loading) {
        return (
            <View>
                <ActivityIndicator size="large" color="#2b17a5" />
                <Text>Loading Users...</Text>
            </View>
        );
    }

    const handleDelete = (id) => {
        Alert.alert(
            "Confirm Delete",
            "Are you sure you want to Delete this user?",
            [
                {text: "Cancel", style: "cancel"},
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: () => {
                        axios
                        .delete(`http://192.168.30.109:8000/registration/api/users/${id}/`)
                        .then(() => {
                            Alert.alert("Success", "User deleted successfully");
                        })
                        .catch((err)=>{
                            console.error(err);
                            Alert.alert("Error", "Failed to delete user");
                        });
                    },
                },
            ]
        );  
    };
    
    

    return(
        <View>
            <Text style={styles.title}>User List Page</Text>
            <FlatList
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <View style={styles.userContainer}>
                        <Text>{item.first_name} {item.last_name}</Text>
                        <Text>Email: {item.email}</Text>
                        <Text>Gender: {item.gender}</Text>

                        <Button
                        title="Edit"
                        color="#40d32dff"
                        />

                        <Button
                        title="Delete"
                        color="#ff3b30"
                        onPress={()=> handleDelete(item.id)}
                        />
                    </View>
                )}
            />
        </View>
    );
}