import React, { useState } from "react";
import { Layout, Affix } from "antd";
import AppHeader from "../../components/AppHeader/AppHeader";
import SlideShow from "../../components/SlideShow/SlideShow";
import AppFooter from "../../components/AppFooter/AppFooter";
import HomeSections from "../../components/HomeSections/HomeSections";
const { Header, Footer, Content } = Layout;

const HomeScreen = () => {
  return (
    <div className="fgfg">
      <Layout className="layout">
        {/* <Header className="header"><AppHeader /></Header> */}
        <Content className="content">
          <div>
            <AppHeader />
            <SlideShow />
            <HomeSections />
            <AppFooter />
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default HomeScreen;
