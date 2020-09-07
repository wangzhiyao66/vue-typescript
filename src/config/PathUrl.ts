import { Subject } from 'rxjs';

export class PathUrl {

  public pathURL: string = '';

  constructor() {
    switch (process.env.VUE_APP_CURENV) {
      case 'development':
        this.pathURL = ''; // 本地开发测试环境地址
        break;
      case 'test':
        this.pathURL = ''; // 测试环境地址
        break;
      case 'production':
        this.pathURL = ''; //正式环境地址
        break;
    }
  }
}

