import React ,{Fragment}from 'react';
import {Link} from 'dva/router';
import Child from "../components/child";

class myPage extends React.Component {
  handleToIndex=()=> {
    //console.log(this.props)
    this.props.history.push("/")
  }
  render() {
    return (
      <Fragment>
        <div>我的页面</div>
        <Link to="/">首页</Link>
        <button onClick={this.handleToIndex}>首页</button>
        <Child/>
      </Fragment>
    )
  }
}

export default myPage;
