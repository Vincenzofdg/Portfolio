const { products: model } = require('../models');

module.exports = {
    getAll: async () => {;
        const result = await model.getAll();
        return {status: 200, result};
    },
    updatePublish: async (value, id) => {     
        await model.updatePublish(value, id);
        return {status: 200};
    }
};