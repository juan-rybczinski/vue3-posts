import { useAlertStore } from '@/stores/alert';
import { storeToRefs } from 'pinia';

export const useAlert = () => {
	const alertStore = useAlertStore();
	const { alerts } = storeToRefs(alertStore);
	const { vAlert, vSuccess } = alertStore;

	return { alerts, vAlert, vSuccess };
};
