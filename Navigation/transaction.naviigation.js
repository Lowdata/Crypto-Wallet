
import { createStackNavigator } from '@react-navigation/stack';
import TransactionLogScreen from './TransactionLogScreen';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="TransactionLog">
      <Stack.Screen name="TransactionLog" component={TransactionLogScreen} />
      {/* Add more screens if needed */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
