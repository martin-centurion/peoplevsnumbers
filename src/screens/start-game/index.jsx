import { Button, Text, TextInput, View } from 'react-native';

import { styles } from './styles';
import { Card, Header } from '../../components/index';

const StartGame = () => {
  return (
    <View style={styles.container}>
      <Header title="Welcome" />
      <Text style={styles.title}>Start Game</Text>
      <Card style={styles.inputContainer}>
        <Text style={styles.label}>Write a Number</Text>
        <TextInput placeholder="0" style={styles.input} />
        <View style={styles.buttonContainer}>
          <Button title="Reset" onPress={() => {}} color="#355070" />
          <Button title="Confirm" onPress={() => {}} color="#6D597A" />
        </View>
      </Card>
    </View>
  );
};

export default StartGame;
