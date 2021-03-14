import request from '../network/request'

export function getHomeMultidate(){
  return request({
    url:'home/multidata',
    method:'get'
  })
}