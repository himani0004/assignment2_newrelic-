import React from 'react';
import { AreaChart } from 'nr1';

export default class NewsletterSignups extends React.Component {
    render() {
        return <AreaChart
        accountIds={[4043746]}
        query= "SELECT average(host.memoryUsedPercent) AS 'Memory used %' FROM Metric WHERE `entityGuid` = 'NDA0Mzc0NnxJTkZSQXxOQXw0MjA5ODI1NjA3NTQ3NTI1NTU2' TIMESERIES auto"
        fullWidth
      />;
    }
}