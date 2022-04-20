import React, { Fragment, useContext, useState } from "react";
import { useEffect } from "react";
import { ReportContext } from "../contexts/report-context";
import { formatNumber } from "../utilities/formatters";
import { 
    getHealthyStatusRating, 
    getHealthyStatusText,
    getPerformanceRating,
    getPerformanceText,
    getOverallRating
} from "../utilities/health-rating";

const Summary = () => {
    const context = useContext(ReportContext);
    const [healthRating, setHealthRating] = useState(0);
    const [perfRating, setPerfRating] = useState(0);
    const { aggregate } = context.report.results;
    const { isLoaded } = context;
    const getBadRequestCount = () => {
        let count = 0;
        Object.getOwnPropertyNames(aggregate.codes).map((item, i) => {
            if (parseInt(item, 0) >= 400 && parseInt(item, 0) < 500) {
                count += parseInt(aggregate.codes[item], 0);
            }
        });
        return count;
    };
    const getServerErrorCount = () => {
        let count = 0;
        Object.getOwnPropertyNames(aggregate.codes).map((item, i) => {
            if (parseInt(item, 0) >= 500) {
                count += parseInt(aggregate.codes[item], 0);
            }
        });
        return count;
    };
    const getNetworkErrorCount = () => {
        let count = 0;
        Object.getOwnPropertyNames(aggregate.errors).map((item, i) => {
            count += parseInt(aggregate.errors[item], 0);
        });
        return count;
    };
    const getHttpCodeCount = () => {
        let count = 0;
        Object.getOwnPropertyNames(aggregate.codes).map((item, i) => {
            count += parseInt(aggregate.codes[item], 0);
        });
        return count;
    };
    const getSuccessPercent = (): number => {
        if (aggregate.requestsCompleted === undefined) { return 0; }
        const totalErrors = getBadRequestCount() + getServerErrorCount() + getNetworkErrorCount();
        const totalRequests = getHttpCodeCount() + getNetworkErrorCount();
        console.log('totalRequests', totalRequests);
        console.log('totalErrors', totalErrors);
        return  ((totalRequests - totalErrors) / totalRequests) * 100;
    };
    const calculateHealthRating = () => {
        if (aggregate.errors === undefined) { return 0; }
        let networkErrorCount = 0;
        Object.getOwnPropertyNames(aggregate.errors).map((item, i) => {
            networkErrorCount += parseInt(aggregate.errors[item], 0);
        });
        const rating = getHealthyStatusRating(
            getSuccessPercent(),
            networkErrorCount
        );
        setHealthRating(rating);
    };
    const calculatePerfRating = () => {
        const rating = getPerformanceRating(aggregate.rps.mean as number, aggregate.latency.median as number);
        setPerfRating(rating);
    };
    const getFilledStars = () => {
        return 0;
    };
    const getEmptyStars = () => {
        return 5;
    };
    useEffect(() => {
        calculateHealthRating();
        calculatePerfRating();
    }, [isLoaded, aggregate]);
    
    return (
        <Fragment>
            <a id="summary"></a>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                        <div className="card-header card-header-primary card-header-icon">
                            <div className="card-icon">
                                <i className="fas fa-signal"></i>
                            </div>
                            <p className="card-category">Avg. Load</p>
                            <h3 className="card-title">{isLoaded && formatNumber(aggregate.rps.mean)}</h3>
                        </div>
                        <div className="card-footer">
                            <div className="stats">
                                Median requests per second
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                        <div className="card-header card-header-info card-header-icon">
                            <div className="card-icon">
                                <i className="far fa-hourglass"></i>
                            </div>
                            <p className="card-category">Response Time</p>
                            <h3 className="card-title">{isLoaded && formatNumber(aggregate.latency.median)}</h3>
                        </div>
                        <div className="card-footer">
                            <div className="stats">
                                Median response time (ms)
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                        <div className="card-header card-header-warning card-header-icon">
                            <div className="card-icon">
                                <i className="fas fa-exclamation-triangle"></i>
                            </div>
                            <p className="card-category">Bad Requests</p>
                            <h3 className="card-title">{isLoaded && formatNumber(getBadRequestCount().toString())}</h3>
                        </div>
                        <div className="card-footer">
                            <div className="stats">
                                400+ Response Codes
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                        <div className="card-header card-header-danger card-header-icon">
                            <div className="card-icon">
                                <i className="fas fa-exclamation-circle"></i>
                            </div>
                            <p className="card-category">Errors</p>
                            <h3 className="card-title">{isLoaded && formatNumber(getServerErrorCount().toString())}</h3>
                        </div>
                        <div className="card-footer">
                            <div className="stats">
                                500+ Response Codes
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3">
                    <div className="card card-stats">
                        <div className="card-header card-header-blue card-header-icon">
                            <div className="card-icon">
                                <i className="fas fa-hashtag"></i>
                            </div>
                            <p className="card-category">Requests</p>
                            <h3 className="card-title">{isLoaded && formatNumber(getHttpCodeCount() + getNetworkErrorCount())}</h3>
                        </div>
                        <div className="card-footer">
                            <div className="stats">
                                Total Requests
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                    <div className="card card-stats">
                        <div className="card-header card-header-success card-header-icon">
                            <div className="card-icon">
                                <i className="fas fa-percentage"></i>
                            </div>
                            <p className="card-category">Success Rate</p>
                            <h3 className="card-title">{isLoaded && `${Math.round(getSuccessPercent())} %`}</h3>
                        </div>
                        <div className="card-footer">
                            <div className="stats">
                                Successful Reqs / Total Reqs
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="card card-stats">
                        <div className="card-header card-header-secondary card-header-icon">
                            <div className="card-icon">
                                <i className="fas fa-file-medical-alt"></i>
                            </div>
                            <p className="card-category">Health &amp; Performance</p>
                            <h3 className="card-title">
                                {/* {isLoaded && 
                                    `${getHealthyStatusText(healthRating)}`
                                } */}
                                Coming soon.
                            </h3>
                        </div>
                        <div className="card-footer">
                            <div className="stats">
                                Estimated health and performance
                            </div>
                            {/* { isLoaded && 
                                <span className="float-right">
                                    <span className="stats pr-3">Overall Rating:</span>
                                    {Array(getFilledStars()).fill(<i className="fas fa-star text-warning"></i>)}
                                    {Array(getEmptyStars()).fill(<i className="far fa-star text-muted"></i>)}
                                </span>
                            } */}
                            <span className="float-right">
                                <span className="stats pr-3">Overall Rating:</span>
                                {Array(getEmptyStars()).fill(<i className="far fa-star text-muted"></i>)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default Summary;