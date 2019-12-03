import {AsyncStorage} from 'react-native';

const saveToken = async (token: string) => {
    try {
        await AsyncStorage.setItem('@token', token);
        return 'THANH_CONG';
    } catch (e) {
        return e;
    }
};

export default saveToken;
