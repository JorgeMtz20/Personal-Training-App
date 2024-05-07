import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native';
import { useState } from 'react';

const NewSetInput = () => {
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [sets, setSets] = useState([]);

    const addSet = () => {
        const newSet = { reps: reps, weight: weight };
        console.warn('Adding set: ', newSet);

        // Add the new set to the sets array
        setSets(previousSets => [...previousSets, newSet]);

        // Clear the input fields
        setReps('');
        setWeight('');

        
    };

    return (
        <View style={styles.container}>
            <TextInput 
                value={reps} 
                onChangeText={setReps} 
                placeholder="Reps"
                style={styles.input}
                keyboardType='numeric'
            />
            <TextInput 
                value={weight}
                onChangeText={setWeight}
                placeholder="Weight" 
                style={styles.input}
                keyboardType='numeric'
            />
            <Button title="Add" onPress={addSet}/>
            <ScrollView style={styles.logContainer}>
                {sets.map((set, index) => (
                    <Text key={index} style={styles.logText}>
                        Reps: {set.reps}, Weight: {set.weight}
                    </Text>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        flexDirection: 'column', 
    },
    input: {
        borderWidth: 1,
        borderColor: 'gainsboro',
        padding: 10,
        flex: 1,
        borderRadius: 5,
        marginBottom: 10, // added margin for spacing
    },
    logContainer: {
        maxHeight: 200,
        borderWidth: 1,
        borderColor: 'gainsboro',
        marginTop: 10,
    },
    logText: {
        padding: 10,
    }
});

export default NewSetInput;
