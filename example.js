 import request from '../utils/request';
const pox="/apis"

export function query() {
  return request('/api/users');
}

 export function testCnode() {
   return request(pox+'/api/v1/topics');
 }

 //注册mock
 export function mockData() {
   return request('api/mockdata');
 }
