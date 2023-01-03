// import EncryptedStorage from 'react-native-encrypted-storage';
import AsyncStorage from "@react-native-async-storage/async-storage";

const storeLocalData = async (key: string, value: any) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
        var tempData: any = await retrieveLocalData(key);
        //tempData = JSON.parse(tempData);
        console.log(`Dados armazenados: ${JSON.stringify(tempData, null, "\t")}`);
    } catch (error) {
        console.log(`Erro ao armazenar dados (key: ${key}) no LocalStorage: ${error}`);
    }
};

const retrieveLocalData = async (key: string) => {
    var data = null;
    try {
        data = await AsyncStorage.getItem(key);
        //console.log(`Dados (key: ${key}) do LocalStorage: ${JSON.stringify(data)}`);
        // data = JSON.parse(JSON.stringify(data))
        // console.log(data)
    } catch (error) {
        console.log(`Erro ao recuperar dados (key: ${key}) do LocalStorage: ${error}`);
    }
    return data;
};

// const removeLocalData = async (key:string) => {
//   try {
//     await EncryptedStorage.removeItem(key);
//   } catch (error) {
//     console.log(`Erro ao remover dados (key: ${key}) do LocalStorage: ${error}`);
//   }
// }

const clearStorage = async () => {
    try {
        await AsyncStorage.clear();
    } catch (error) {
        console.log(`Erro ao remover todos os dados`);
    }
};
export { storeLocalData, retrieveLocalData, clearStorage };
