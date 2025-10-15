import {View, Text, Button, ActivityIndicator, FlatList} from 'react-native';
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
                        color="#40d32dff"/>

                        <Button
                        title="Delete"
                        color="#ff3b30"/>
                    </View>
                )}
            />
        </View>
    );
}