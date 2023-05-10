import { useFonts } from 'expo-font';
import { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { Header } from './components';
import { theme } from './constants';
import { Game, StartGame } from './screens/index';
import { styles } from './styles';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [loaded] = useFonts({
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    'Inter-Black': require('../assets/fonts/Inter-Black.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
    'Inter-ExtraBold': require('../assets/fonts/Inter-ExtraBold.ttf'),
    'Inter-ExtraLight': require('../assets/fonts/Inter-ExtraLight.ttf'),
    'Inter-Light': require('../assets/fonts/Inter-Light.ttf'),
    'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
    'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Thin': require('../assets/fonts/Inter-Thin.ttf'),
  });

  if (!loaded) {
    return <ActivityIndicator size="large" color={theme.colors.primary} />;
  }

  const headerTitle = userNumber ? 'Game' : 'Welcome';

  const onStartGame = (number) => {
    setUserNumber(number);
  };

  const Content = () =>
    userNumber ? <Game userNumber={userNumber} /> : <StartGame onStartGame={onStartGame} />;

  return (
    <View style={styles.container}>
      <Header title={headerTitle} />
      <Content />
    </View>
  );
}
