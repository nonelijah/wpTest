const path = require("path");
const webpack = require("webpack");

// export default 와 같이 모듈을 밖으로 빼내는 Node JS 문법입니다. 엔트리, 아웃풋 그리고 번들링 모드를 설정할 수 있습니다.
module.exports = {
    mode: "development",

    entry: {
        main: path.resolve("./src/app.js"),
    },

    output: {
        filename: "[name].js",
        path: path.resolve("./dist"),
    },

    module: {
        // 로더를 추가하는 장소입니다.
        rules: [
            // {
            //     test: /\.js$/,
            //     use: [path.resolve("./myLoader.js")],
            // },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 80 * 1024,
                    },
                },
            },
        ],
    },
    plugins: [
        new webpack.BannerPlugin({
            //toLocaleString : 날짜의 문자열 표현을 지역의 언어에 맞는 형식으로 반환합니다.
            banner:
                "마지막 빌드 시간은 " +
                new Date().toLocaleString() +
                " 입니다.",
        }),
    ],
};
