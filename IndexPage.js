import React from 'react';
import {connect} from 'dva';
import * as apis from '../services/example'

class IndexPage extends React.Component{
  handleSetName=()=>{
    //console.log(this.props);
    this.props.dispatch({
      type:"indexTest/setName",
      data:{
        name:"华晨宇"
      }
    })
  }
  handleSetNameAsync=()=>{
    //console.log(this.props);
    this.props.dispatch({
      type:"indexTest/setNameAsync",
      data:{
        name:"华晨宇"
      }
    })
  }
  componentDidMount() {
    /*apis.testCnode().then((res)=>{
      console.log(res);
    })*/
    apis.mockData().then((res)=>{
      console.log(res);
    })
  }
  testCnode=()=>{
    this.props.dispatch({
      type:"indexTest/setNameAsync"
    })
  }

  render() {
    console.log(this.props)
    return(
      <div>
        我是首页
        {this.props.msg}
        <div>
          {
            this.props.name
          }
        </div>
        <button onClick={this.handleSetName}>setName</button>
        <button onClick={this.handleSetNameAsync}>setNameAsync</button>
        <button onClick={this.testCnode}>testCnode</button>
      </div>
    )
  }
}
const mapStateToProps = state=> {
  //console.log(state);
  return{
    msg:"哈哈哈",
    name: state.indexTest.name,
    cnodeData: state.indexTest.cnodeData
  }
}
export default connect(mapStateToProps)(IndexPage);
