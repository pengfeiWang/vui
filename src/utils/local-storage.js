var storage, noLocalStorage, customStore = {};
// 这里需要判断本地存贮是否支持, 还需要判断是否有权限, 比如无痕模式, 会报错
try {
  if( window.localStorage ) {
    storage = window.localStorage;
    storage.setItem('noLocalStorage', '')
  } else {
    throw new Error("QuotaExceeded: no localStorage")
  }
} catch ( err ) {
  noLocalStorage = ( (err.message || '').indexOf("QuotaExceeded") !== -1 )
}    
if( noLocalStorage ) {
 storage = {
  getItem ( name ){
    return customStore[name]
  },
  setitem (name, value){
    customStore[name] = value;
  }
 };
}

export {storage};