import axios from 'axios';
import * as Constants from '../utils/Constants';

class ApiService {

    findUsers() {
        return axios.get(Constants.CRIENTE_API_BASE_URL);
    }

    findUserById(userId) {
        return axios.get(Constants.CRIENTE_API_BASE_URL + '/' + userId);
    }

    deleteUser(userId) {
        return axios.delete(Constants.CRIENTE_API_BASE_URL + '/' + userId);
    }

    addUser(user) {
        return axios.post(Constants.CRIENTE_API_BASE_URL, user);
    }

    editUser(user) {
        return axios.put(Constants.CRIENTE_API_BASE_URL + '/' + user.id, user);
    }

}

export default new ApiService();