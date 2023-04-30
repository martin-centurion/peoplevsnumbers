import { Button, Text, TextInput, View } from 'react-native';

import { styles } from './styles';
import { Card, Header } from '../../components/index';
import { theme } from '../../constants';

const StartGame = () => {
  return (
    <View style={styles.container}>
      <Header title="Welcome" />
      <Text style={styles.title}>Start Game</Text>
      <Card style={styles.inputContainer}>
        <Text style={styles.label}>Write a Number</Text>
        <TextInput placeholder="0" style={styles.input} />
        <View style={styles.buttonContainer}>
          <Button title="Reset" onPress={() => {}} color={theme.colors.primary} />
          <Button title="Confirm" onPress={() => {}} color={theme.colors.secondary} />
        </View>
      </Card>
    </View>
  );
};

export default StartGame;
