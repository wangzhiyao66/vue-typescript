/* eslint-disable no-unused-vars */
import axios, { AxiosError } from "axios"
import Vue from 'vue'
import { AjaxResponse } from '@/interface/AjaxResponse';
import { PathUrl } from '@/config/PathUrl';
import { getToken, removeToken } from '@/utils/Function';
import ElementUI from "element-ui";
import router from "@/router";
import { Loading } from 'element-ui';
export default class HttpRequest extends Vue {

  private queue: any;
  private loadOption: any = {
    lock: true,
    text: 'Loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  }

  constructor() {
    super();
    this.queue = {}
  }

  getInsideconfig() {
    const config = {
      // 添加全局请求配置
    };
    return config;
  }

  // 添加token 如果token不存在那么跳转到login登陆页面
  // addBearToken(config: any, url: string) {
  //   // 过滤登陆注册接口
  //   if (
  //     !(['/admin/reg', '/admin/check', '/admin/login'].some((x) => url.indexOf(x) !== -1))
  //   ) {
  //     config.headers.Authorization = `Bearer ${getToken()}`; // 添加token
  //   }
  // }


  // 添加 拦截器
  interceptors(instance: any, url: string | number) {
    // 请求拦截器
    instance.interceptors.request.use((config: any) => {
      // console.log("请求拦截器config", config);
      // 网络诊断  已连接 true   未连接 false
      if (!navigator.onLine) {
        ElementUI.Message.error('Network error: please check the network connection!');
      }

      // 添加全局控制
      if (!Object.keys(this.queue).length) {
        // 开启loading弹窗
        // Loading.service(this.loadOption);
        // console.log('开启loading弹窗', this.queue, this.queue.length);
      }
      this.queue[url] = true;

      // this.addBearToken(config, config.url); // 添加token
      return config;
    }, (error: any) => {
      // console.log("请求拦截器error", error);
      ElementUI.Message.error(error);

      return Promise.reject(error);
    }),
      // 响应拦截器
      instance.interceptors.response.use((res: AjaxResponse) => {
        // 添加全局控制
        // console.log("响应拦截器==>", res);

        delete this.queue[url];
        // 添加全局控制
        // console.log('关闭 loading 弹窗', this.queue, this.queue.length);
        // if (Object.keys(this.queue).length === 0) {
        //   let loadingInstance = Loading.service(this.loadOption);
        //   this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
        //     loadingInstance.close();
        //   });
        // }
        let authcodelist = [1000, 1010, 1011, 1012, 1020, 1100, 1110]; //auth 的返回结果
        // console.log('相应拦截器：',res);

        if (res.status === 200) {

          if (Object.prototype.toString.call(res.data) !== '[object Blob]') {
            //接口处理报错
            if (res.data.returnCode !== '200' && !authcodelist.includes(res.data.returnCode)) {
              ElementUI.Message.error(res.data.msg);
              return Promise.reject(res)
            }
          }

          let Res = res.data;
          Res.headers = res.headers;
          return Res;
        } else {
          ElementUI.Message.error(res.status + ':' + res.statusText);
          return Promise.reject(res)
        }

        // return res;
      }, (error: AxiosError) => {
        // console.log('error');
        // console.dir(error);

        ElementUI.Message.error(error.message || 'Service exception, please try again later');

        //超时处理
        if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
          // ElementUI.Message({
          //   type:'error',
          //   showClose:true,
          //   dangerouslyUseHTMLString: true,
          //   message: '<span>The server is timeout, please try again later ,<a class="res-link" onclick="location.reload()">click to refresh the page</a></span>'
          // });
          // ElementUI.Message.error('The server is timeout, please try again later ,click to refresh the page');
          return Promise.reject('timeout');
        }

        if (error.response) {
          switch (error.response.status) {
            case 401:
              // 返回 401 清除token信息并跳转到登录页面
              ElementUI.Message.error('The login information has been expired, please login again.');
              removeToken();
              router.replace({
                name: 'login'
              }).then(r => {
                console.log('路由跳转成功');
              })
          }
        }
        delete this.queue[url];
        // 添加全局控制
        // console.log('关闭 loading 弹窗', this.queue, this.queue.length);
        // if (Object.keys(this.queue).length) {
        //   let loadingInstance = Loading.service(this.loadOption);
        //   this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
        //     loadingInstance.close();
        //   });
        // }
        return Promise.reject(error);
      })
  }

  request(options: any) {
    // 配置 axios 默认选项
    const instance = axios.create({
      baseURL: new PathUrl().pathURL,
      timeout: 60 * 5 * 1000,
    });
    // 配置请求头
    options = Object.assign(this.getInsideconfig(), options);
    this.interceptors(instance, options.url)
    return instance(options);
  }
}
