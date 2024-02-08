import * as SecureStore from 'expo-secure-store';

// TODO: Spostare funzioni API e Storage in file appositi

export async function save(key, value) {
	await SecureStore.setItemAsync(key, value);
}

export async function deleteSecureItem(key) {
	await SecureStore.deleteItemAsync(key);
}

export async function getValueFor(key) {
	return await SecureStore.getItemAsync(key);
}