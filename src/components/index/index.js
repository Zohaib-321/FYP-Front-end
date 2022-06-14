import React, { Component } from "react";
import { Link, Redirect, useLocation } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import SidebarCompnent from "../sidebar";
import Topbar from "../topbar";
import Footer from "../footer";
import Chart from "../chart/Chart";
import FeaturedInfo from "../featuredinfo/FeaturedInfo";
import WidgetLg from "../widgetLg/WidgetLg";
import WidgetSm from "../widgetSm/WidgetSm";
import "./home.css"
import { userData } from "../../dummyData";

export default class index extends Component {
  logouthandler() {
    window.localStorage.clear();
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div id="wrapper">
            <SidebarCompnent />
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <Topbar />
                <div className="container-fluid">
                  <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-primary font-weight-bold">Distributor</h1>
                    <a
                      href="#"
                      className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                    >
                      <i className="fas fa-download fa-sm text-white-50"></i>{" "}
                      Generate Report
                    </a>
                  </div>

                  
                  <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
                </div>
              </div>

              <Footer />
            </div>
          </div>

          <a className="scroll-to-top rounded" href="#page-top">
            <i className="fas fa-angle-up"></i>
          </a>

          <div
            className="modal fade"
            id="logoutModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Ready to Leave?
                  </h5>
                  <button
                    className="close"
                    type="button"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  Select "Logout" below if you are ready to end your current
                  session.
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <a
                    className="btn btn-primary"
                    href="login"
                    onClick={this.logouthandler}
                  >
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
