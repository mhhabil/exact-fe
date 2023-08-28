import { StorageService } from '../../shared/local-storage';

const userData = (typeof localStorage !== 'undefined') ? JSON.parse(StorageService().get('userData')) : {};
const role = userData ? userData.role : null;

export default role;
