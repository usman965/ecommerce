import axios from 'axios';

class ApiCallerService {
    constructor(baseURL) {
        this.api = axios.create({ baseURL });
    }

    async get(endpoint) {
        try {
            const response = await this.api.get(endpoint);
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }

}

export default ApiCallerService;
