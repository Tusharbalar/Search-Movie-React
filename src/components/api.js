export const API=(url,data={},options={},method='GET')=>{
  return fetch(url,Object.assign({
    method
  },options));
}; 