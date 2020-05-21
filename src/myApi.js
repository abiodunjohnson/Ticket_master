import ticketType from '../src/data.js'


export default {
    getallTypes: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(ticketType);
            }, 500);
        });
    },
    allTypes: (action, ticketTypeId) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(ticketTypeId);
            }, 100);
        });
    }
}