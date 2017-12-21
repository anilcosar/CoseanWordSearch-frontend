import superagent from 'superagent';
//WARNING
//import config from '../config'

const methods = ['get', 'post', 'put', 'patch', 'del'];

function formatUrl(path) {
   const adjustedPath = path[0] !== '/' ? '/' + path : path;

   if (process.env.NODE_ENV === "development") {
       return 'http://localhost:8080/api/v1' + adjustedPath;
   }
   return '/api/v1' + adjustedPath;
}

export default class ApiClient {

   get token() {
      return this.constructor.token;
   }

   set token(token){
      this.constructor.token = token;
   }

   constructor(req) {
      methods.forEach((method) =>
         this[method] = (path, {params, data, file} = {}) => new Promise((resolve, reject) => {
            const request = superagent[method](formatUrl(path));

            if(!file){
               request.set("Content-Type", "application/json")
            }
            /*
            if(this.token){
               request.set('token',this.token);
            }
            */
            if (params) {
               request.query(params);
            }

            if (data) {
               request.send(JSON.stringify(data));
            }
            if (file) {
               request.attach('uploaded_file', file)
            }

            request.end((err, {body} = {}) => err ? reject(body || err) : resolve(body));
         }));
   }
}