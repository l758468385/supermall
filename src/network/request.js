import axios from 'axios'


const service = axios.create({
  baseURL:'http://152.136.185.210:7878/api/m5',
  timeout:5000
})

// service.interceptors.request.use(config => {
//   return config
// },error => {
//   console.log(error);
// })

// service.interceptors.reponse.use(response => {
//   return response
// },error => {
//   console.log(error);
// })


export default service