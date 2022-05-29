const CracoLessPlugin = require('craco-less');
const CracoAlias = require("craco-alias");

module.exports = {

    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#d6ecf0' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
        // {
        //     plugin: CracoAlias,
        //     options: {
        //         source: "options",
        //         baseUrl: "./",
        //         aliases: {
        //             "@/*": ["./src/*"]
        //         }
        //     }
        // }
    ],
};