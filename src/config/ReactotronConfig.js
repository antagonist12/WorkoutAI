import Reactotron from 'reactotron-react-native';

Reactotron
  .configure({
    name: 'WorkoutAI',
    host: '10.0.2.2', // untuk emulator Android
  })
  .useReactNative()
  .connect();