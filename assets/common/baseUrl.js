import { Platform } from 'react-native'
import Constants from 'expo-constants'


const baseURL = `http://${Constants.manifest.debuggerHost.split(':').shift()}:3000/api/v1/`

// {Platform.OS == 'android'
// ? baseURL = 'http://10.0.2.2:3000/api/v1/'
// : baseURL = 'http://localhost:3000/api/v1/'
// }

export default baseURL;
