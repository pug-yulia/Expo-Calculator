import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CalculatorPage from './CalculatorPage';
import HistoryPage from './HistoryPage';

const Stack = createStackNavigator();

const App = () => {
  const [history, setHistory] = React.useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Calculator">
        <Stack.Screen name="Calculator">
          {(props) => <CalculatorPage {...props} history={history} setHistory={setHistory} />}
        </Stack.Screen>
        <Stack.Screen name="History">
          {(props) => <HistoryPage {...props} history={history} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
