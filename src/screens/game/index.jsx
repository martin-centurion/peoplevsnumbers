import { Button, Text, View } from 'react-native';

import { styles } from './styles';
import { Card } from '../../components';
import { theme } from '../../constants';

const Game = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.content}>
        <Text style={styles.title}>Guess a Number</Text>
        <View style={styles.buttonContainer}>
          <Button title="Lower" color={theme.colors.primary} />
        </View>
      </Card>
    </View>
  );
};

export default Game;
