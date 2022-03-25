import React from "react";

export default () => (
    <div className="sidebar">
        <div className="sidebar-wrapper">
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link" onClick={() => {
                        window.scrollTo(0, 0);
                        location.hash = '';
                    }}>
                        <i className="fas fa-caret-square-up"></i>
                        <span className="text">Top</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#summary">
                        <i className="fas fa-th"></i>
                        <span className="text">Summary</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#information">
                        <i className="fas fa-info-circle"></i>
                        <span className="text">Information</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#scenarios">
                        <i className="fas fa-network-wired"></i>
                        <span className="text">Scenario and Latency</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#httpcodes">
                        <i className="fas fa-globe-americas"></i>
                        <span className="text">Codes and Errors</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#phases">
                        <i className="fas fa-list-ul"></i>
                        <span className="text">Phases</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#graph_latency">
                        <i className="fas fa-chart-area"></i>
                        <span className="text">Latency over time</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#graph_reqload">
                        <i className="fas fa-chart-area"></i>
                        <span className="text">Requests over time</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#graph_codes">
                        <i className="fas fa-chart-area"></i>
                        <span className="text">Http codes over time</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#graph_totalcodes">
                        <i className="fas fa-chart-area"></i>
                        <span className="text">Response codes</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#addons">
                        <i className="fas fa-puzzle-piece"></i>
                        <span className="text">Addons</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
);
