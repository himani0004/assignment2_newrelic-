import React from 'react';
import Data1 from './data1';
import Data2 from './data2';
import Data3 from './data3';

export default class customviz extends React.Component {
    render() {
        return <div>
            <Data1 />
            <Data2 />
            <Data3 />
        </div>
    }
}