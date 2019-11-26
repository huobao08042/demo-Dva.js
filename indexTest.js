import * as apis from '../services/example'

export default {
  namespace: 'indexTest',
  state: {
    name: 'Msea',
    cnodeData:[]
  },
  reducers: {
    setName(state, payLoad) {
      //console.log(payLoad.data.name);
      let _state=JSON.parse(JSON.stringify(state));
      _state.name=payLoad.data.name;
      return _state;
    },
    setCnodeDataList(state, payLoad) {
      let _state=JSON.parse(JSON.stringify(state));
      _state.cnodeData = payLoad.data;
      return _state;
    },
    testPath(state, payLoad) {
      console.log("用户页");
      return state;
    }
  },
  effects:{
    *setNameAsync ({payLoad}, {put, call}) {
      yield put ({
        type:"setName",
        data:{
          name:"大魔王"
        }
      })
      //yield console.log("run");
    },
    *testCnode ({payLoad}, {put, call}) {
      let rel = yield call(apis.testCnode);
      if(rel.data) {
        //console.log(rel.data.data);
        yield put ({
          type: "setCnodeDataList",
          data: rel.data.data
        })
      }
    }
  },
  subscriptions: {
    haha({dispatch, history}){
      history.listen(({pathname})=>{
        if (pathname==="/user") {
          //console.log("用户页");
          dispatch({
            type: "testPath"
          })
        }
      })
    }
  }
}
