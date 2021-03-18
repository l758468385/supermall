import request from "../network/request";

export function getHomeMultidate() {
  return request({
    url: "home/multidata",
    
    method: "get",
  })
}


export function getHomeGood(type,page) {
  return request ({
    url:"home/data",
    params:{
      type,
      page
    }
  })
}

