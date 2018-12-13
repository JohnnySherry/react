import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Table } from 'antd';
import { Calendar } from 'antd';

function onPanelChange(value, mode) {
  console.log(value, mode);
}

class Chart extends React.Component {

  render() {
    return (
      <Calendar onPanelChange={onPanelChange} />
    );
  }
}

export default Chart;
