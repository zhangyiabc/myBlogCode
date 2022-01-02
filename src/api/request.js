
import axios from "axios";
import {showMessage} from "@/utils/index"


const ins = axios.create();//创建一个axios实例
ins.interceptors.response.use(function(res){

  if(res.data.code != 0){
    showMessage({
      content:res.data.msg,
      type:"error"
    })
    return null
  }
  return res.data.data;
});
export default ins 
