import React, {useState} from 'react';
import {Row, Col} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import "./AppHeader.css";
import { AppHeaderTabs } from '../../Utils/Constants';

const AppHeader = () => {
    const [headerTab, setHeaderTab] = useState(1);
    const showHeaderTabs = AppHeaderTabs.map((tab) => (
        <div key={tab.id} onClick={() => { setHeaderTab(tab.id) }} className={
            headerTab === tab.id ? "defaultTabsActivated" : "defaultTabs"
        }>
            {tab.title}
        </div>
    ));
  return (
    <div className='AppHeader-div1'>
        <div className='AppHeader-div2'><h1 className='AppHeader-div2-h1'>Movie +</h1></div>
        <div>
            <div className='AppHeader-div3'>
                {showHeaderTabs}
            </div>
        </div>
        <div className='AppHeader-div4'><UserOutlined /></div>
    </div>
  )
}

export default AppHeader