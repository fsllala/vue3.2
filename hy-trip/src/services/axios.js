// axios 基础练习

// axios.defaults.baseURL = "http://123.207.32.32:8000";

// 创建其他的实例发送网络请求
const instance1 = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    // 超时时间 单位是ms，这里设置了10s的超时时间
    timeout: 8 * 1000,
    headers: {}
})


// 拦截器
// instance1.interceptors.request.use("请求成功的回调","请求失败的回调");
// instance1.interceptors.response.use("请求成功的回调","请求失败的回调");

instance1.interceptors.request.use((config) => {
    // console.log(config);

    // 1.开启loading的动画

    /**
     * 2.对原来的配置进行一系列的修改
     * 2.1 header
     * 2.2 认证登录 token/cookie
     * 2.3 请求参数进行某些转换
     */


    return config;
}, (error) => {
    console.log("请求失败的拦截")
    return error;
});

instance1.interceptors.response.use((res) => {
    // 因为axios接口是 res.data.data这种形式的,所以返回res.data 就可以少写一个data了;
    // console.log(res)

    // 1.结束loading的动画

    return res.data;
}, (error) => {
    console.log("响应失败的拦截")
    return error;
});




instance1.get("/home/multidata").then(res => {
    console.log(res)
})