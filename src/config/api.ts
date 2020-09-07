import { ApiConfig } from './Apiconfig';
import { PathUrl } from './PathUrl';

// 集成 API 文档

export class Api {

  public api: ApiConfig;

  constructor() {
    this.api = this.getApi();
  }

  // 获取 过程是私有的，防止别人篡改接口
  private getApi(): ApiConfig {
    return {
      getToken: '/oauth/rest_token',
    }
  }
}

const API: ApiConfig = new Api().api;
export default API;
