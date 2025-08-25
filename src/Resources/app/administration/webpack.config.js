const { join, resolve } = require('path');

module.exports = () => ({
    resolve: {
        alias: {
            '@Administration': resolve(
                __dirname,
                '../../../../../../../vendor/shopware/administration/Resources/app/administration/src'
            )
        }
    }
});
