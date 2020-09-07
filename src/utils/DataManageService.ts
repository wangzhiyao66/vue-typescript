import { Subject } from 'rxjs';

class DataManageService {

  constructor() { }

  // 数据 更新
  public updataBaseData: any;
  public updataBaseDataSubject: Subject<any> = new Subject<any>();

  /**
   * 存贮时 get方法和set方法必须同时存在
   * @param value  传输的数据流
   */
  public setUpdata(value: any): any {
    if (value) {
      this.updataBaseData = value;
      this.updataBaseDataSubject.next(value);
    } else {
      return '';
    }
  }
  public getUpdata(): any {
    return this.updataBaseData;
  }

}
const dataManageService: DataManageService = new DataManageService();
export default dataManageService;
