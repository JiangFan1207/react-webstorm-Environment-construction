
module.exports = {
    entry:"./src/index.js",
    output:{
        /*path:"./dist/",*/
        path: require('path').join(__dirname,'./dist/'),
        filename:"bundle.js"
    },
    devServer:{
        inline:true,
        contentBase:'./dist',
        port:333
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel',
                query:{
                    presets:['es2015','react'],
                }
            }
        ]
    }
};