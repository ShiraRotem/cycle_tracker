import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Button, Alert, FlatList, StyleSheet } from 'react-native';

// Main App Component
export default function App() {
  const [date, setDate] = useState('');
  const [dayOfCycle, setDayOfCycle] = useState('');
  const [note, setNote] = useState('');
  const [sex, setSex] = useState('');
  const [bleeding, setBleeding] = useState(0);
  const [fluid, setFluid] = useState('');
  const [cramps, setCramps] = useState(0);
  const [mood, setMood] = useState('');
  const [cycleData, setCycleData] = useState([]);

  // Function to add cycle data
  const addData = () => {
    if (!date || !dayOfCycle || !note || !sex || !fluid || !mood) {
      Alert.alert('Please fill out all fields!');
      return;
    }
    
    const newData = {
      date: date,
      dayOfCycle: dayOfCycle,
      note: note,
      sex: sex,
      bleeding: bleeding,
      fluid: fluid,
      cramps: cramps,
      mood: mood,
    };

    setCycleData([...cycleData, newData]);

    // Clear form fields after adding
    setDate('');
    setDayOfCycle('');
    setNote('');
    setSex('');
    setBleeding(0);
    setFluid('');
    setCramps(0);
    setMood('');
    
    Alert.alert('Data added successfully!');
  };

  // Render each data item
  const renderDataItem = ({ item, index }) => (
    <View style={styles.row}>
      <Text>{index + 1}</Text>
      <Text>{item.date}</Text>
      <Text>{item.dayOfCycle}</Text>
      <Text>{item.note}</Text>
      <Text>{item.sex}</Text>
      <Text>{item.bleeding}</Text>
      <Text>{item.fluid}</Text>
      <Text>{item.cramps}</Text>
      <Text>{item.mood}</Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Menstrual Cycle Tracker</Text>

      <View style={styles.form}>
        <Text>Date (DD-MM-YYYY)</Text>
        <TextInput style={styles.input} value={date} onChangeText={setDate} placeholder="Enter date" />

        <Text>Day of Cycle</Text>
        <TextInput style={styles.input} value={dayOfCycle} onChangeText={setDayOfCycle} placeholder="Enter day of cycle" keyboardType="numeric" />

        <Text>Note</Text>
        <TextInput style={styles.input} value={note} onChangeText={setNote} placeholder="Enter note" />

        <Text>Sex</Text>
        <TextInput style={styles.input} value={sex} onChangeText={setSex} placeholder="Enter sex method" />

        <Text>Bleeding (0-4)</Text>
        <TextInput style={styles.input} value={String(bleeding)} onChangeText={text => setBleeding(Number(text))} placeholder="Enter bleeding level" keyboardType="numeric" />

        <Text>Fluid</Text>
        <TextInput style={styles.input} value={fluid} onChangeText={setFluid} placeholder="Enter fluid type" />

        <Text>Cramps (0-3)</Text>
        <TextInput style={styles.input} value={String(cramps)} onChangeText={text => setCramps(Number(text))} placeholder="Enter cramps level" keyboardType="numeric" />

        <Text>Mood</Text>
        <TextInput style={styles.input} value={mood} onChangeText={setMood} placeholder="Enter mood" />

        <Button title="Add Entry" onPress={addData} />
      </View>

      <Text style={styles.subTitle}>Cycle Data</Text>
      <View style={styles.tableHeader}>
        <Text>#</Text>
        <Text>Date</Text>
        <Text>Day</Text>
        <Text>Note</Text>
        <Text>Sex</Text>
        <Text>Bleed</Text>
        <Text>Fluid</Text>
        <Text>Cramps</Text>
        <Text>Mood</Text>
      </View>
      
      <FlatList
        data={cycleData}
        renderItem={renderDataItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  form: {
    marginBottom: 20,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ddd',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
});
