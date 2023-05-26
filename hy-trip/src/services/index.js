import axios from "axios";
import { useMainStore } from '@/stores/modules/main.js';

const reqURL = "http://123.207.32.32:1888";
const mainStore = useMainStore();

class FSLRequest {
    constructor(baseURL, timeout = 8000) {
        this.instance = axios.create({
            baseURL,
            timeout,
            headers: {}
        })
        this.instance.interceptors.request.use(config => {
            mainStore.showLoading = true;
            return config;
        }, err => {
            return err;
        })
        this.instance.interceptors.response.use(res => {
            mainStore.showLoading = false;
            return res;
        }, err => {
            mainStore.showLoading = false;
            return err;
        })
    }
    request(config) {
        return new Promise((resolve, reject) => {
            this.instance.request(config).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }

    get(config) {
        return this.request({ ...config, method: "get" })
    }

    post(config) {
        return this.request({ ...config, method: "post" })
    }
}


// 可以创建多个实例;发送不同的URL;
// const FSLRequest1 = new FSLRequest("http://123.207.32.32:8000");
// const FSLRequest2 = new FSLRequest("http://123.207.32.32:3000");


export default new FSLRequest(reqURL);    