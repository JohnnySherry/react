import React, { Component } from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import './App.css';

class Echart extends React.Component {
  
  componentDidMount() {
  	var myChart = echarts.init(document.getElementById('main'));
  	myChart.setOption({
  		title:{text: 'Echarts入门示例'},
  		tooltip:{},
  		xAxis: {
  			data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
  		},
  		yAxis: {},
  		series: [{
  			name: '销量',
  			type: 'bar',
  			data: [5,20,36,10,10,20]
  		}]
  	});
  }

  render() {
    return (
      <div id="main" style={{width:400, height:400}}></div>
    );
  }
}

export default Echart;