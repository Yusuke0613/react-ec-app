
import React from "react";

// components

import CardLineChart from "../components/Cards/CardLineChart";
import CardPileChart from "../components/Cards/CardPileChart";
import CardStats from "../components/Cards/CardStats";
import AdminTemplete from "../layouts/Admin";

const Dashboard =() => {
  return (
    <AdminTemplete>
       {/* Card stats */}
      <div className="flex flex-wrap mb-4">
        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            statSubtitle="TRAFFIC"
            statTitle={350897}
            statArrow="up"
            statPercent="3.48"
            statPercentColor="text-emerald-500"
            statDescripiron="Since last month"
            statIconName="far fa-chart-bar"
            statIconColor="bg-red-500"
          />
        </div>
        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            statSubtitle="NEW USERS"
            statTitle={2356}
            statArrow="down"
            statPercent="3.48"
            statPercentColor="text-red-500"
            statDescripiron="Since last week"
            statIconName="fas fa-chart-pie"
            statIconColor="bg-orange-500"
          />
        </div>
        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            statSubtitle="SALES"
            statTitle={924}
            statArrow="down"
            statPercent="1.10"
            statPercentColor="text-orange-500"
            statDescripiron="Since yesterday"
            statIconName="fas fa-users"
            statIconColor="bg-pink-500"
          />
        </div>
        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            statSubtitle="PERFORMANCE"
            statTitle={49.65}
            statArrow="up"
            statPercent="12"
            statPercentColor="text-emerald-500"
            statDescripiron="Since last month"
            statIconName="fas fa-percent"
            statIconColor="bg-lightBlue-500"
          />
        </div>
      </div>



      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardPileChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        {/* <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div> */}
      </div>
    </AdminTemplete>
  );
}
export default  Dashboard;