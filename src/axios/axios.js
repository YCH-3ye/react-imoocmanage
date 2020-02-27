import JsonP from 'jsonp'
export default class Axios {

  static jsonp(options) {
    return new Promise((resolve, reject) => {
      JsonP(options.url,{
        param: 'callback'
      }, function(err, response) {
        if(err) {
          reject(err)
        }
        resolve(response)
        console.log('err', err)
      })
    })
  }
  // static jsonp(options) {
  //   return new Promise((resolve, reject) => {
  //       JsonP(options.url, {
  //           param: 'callback'
  //       }, function (err, response) {
  //           if (response.status == 'success') {
  //               resolve(response);
  //           } else {
  //               reject(response.messsage);
  //           }
  //       })
  //   })
}