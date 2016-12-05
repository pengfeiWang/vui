import axios from 'axios';
import extend from 'extend';
// setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded');
export default function (ops) {
  var o = extend({}, ops);
  // let formdata = new FormData();
  // o.headers = {
  //   'X-Requested-With': 'XMLHttpRequest'
  //   // ,
  //   // 'Content-Type': 'application/x-www-form-urlencoded'
  // }
  // for( var i in o.data ) {
  //   formdata.append(i, o.data[i])
  // }
  // o.data = formdata
  return axios(o);
}
