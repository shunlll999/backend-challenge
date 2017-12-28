import axios from 'axios';

const root = 'https://jsonplaceholder.typicode.com';

export const API = {
  getSample: ()=> {
    axios.get(root+'/posts')
    .then(function (response) {
      return Promise.resolve(response);
    })
    .catch(function (error) {
      return Promise.reject({
        data: {
          error: [{
            status: 0,
            detail: 'Something went wrong, please contact us'
          }]
        }
      })
    });
  }
}
