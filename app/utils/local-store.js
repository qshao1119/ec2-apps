var _localStore = {};

//function saveStore() {
//  localStorage.setItem(STORE_KEY, JSON.stringify(store));
//  var tmp = JSON.parse(localStorage.getItem(STORE_KEY));
//  console.log('stored:', tmp)
//}
//
//function loadStore() {
//  var store = JSON.parse(localStorage.getItem(STORE_KEY));
//  if (store && store.items) {
//    return store;
//  } else {
//    return {
//      input: '',
//      items: [],
//      adsCount: 20,
//      page: 1,
//      account: RMX
//    }
//  }
//}


_localStore.load = function(key) {
  return JSON.parse(localStorage.getItem(key));
};

_localStore.save = function(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
};

export default _localStore;
