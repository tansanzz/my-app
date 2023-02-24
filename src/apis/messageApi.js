import axios from 'axios';

export default {
    async getUser() {
        try {
            const response = await axios.get('http://localhost:3002/users');
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    },
};
