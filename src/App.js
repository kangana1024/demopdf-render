import React, { Component } from "react";
import "./App.css";
// import { PDFDownloadLink } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./components/Report";

//import PageReport from "./components/Report/PageReport";

// Create Document Component

const demoDatas = [
  {
    id: 1,
    uid:"DPAR0001",
    name: "Mr. Tanit Plengsrisuk",
    eq: 2024402.0,
    asDate: "04-Feb-2019 @ 05:00 PM",
    bank_deposit_head: 542198.28,
    bank_deposit_desc: 542198.28,
    interest: 183.91,
    total_assets: 2024402.0,
    accured_fees: 2149.75,
    trusteeFee: 1339.75,
    managementFee: 810.0,
    net_asset: 2564634.44,
    custodian_fee: 6.32,
    vat_custodian_fee: 0.44,
    vat_0_dustodian: 0,
    gross_trusteeFee: 6.76,
    management_fee: 73.78,
    vat_management_fee: 5.16,
    vat_0_management_fee: 0,
    gross_management_fee: 78.94,
    total_fee_today: 85.7,
    total_liabilities: 2235.45,
    nouapd: 250000.0,
    plus_purchase: 0.0,
    less_redemption: 0.0,
    nouo: 250000.0,
    nav_per_unit: 10.2581,
    sub_price: 10.2582,
    redeem_price: 10.2581,
    nav_last_day: 10.2205,
    nav_today: 10.2581,
    daily_return: "0.37%",
    nav_change: 0.0376,
    nav_change_day: 0.0376
  },
  {
    id: 2,
    uid:"DPAR0002",
    name: "Mrs. Sansanee Sutivong",
    eq: 5965735.0,
    asDate: "04-Feb-2019 @ 05:00 PM",
    bank_deposit_head: 542198.28,
    bank_deposit_desc: 542198.28,
    interest: 183.91,
    total_assets: 2024402.0,
    accured_fees: 2149.75,
    trusteeFee: 1339.75,
    managementFee: 810.0,
    net_asset: 2564634.44,
    custodian_fee: 6.32,
    vat_custodian_fee: 0.44,
    vat_0_dustodian: 0,
    gross_trusteeFee: 6.76,
    management_fee: 73.78,
    vat_management_fee: 5.16,
    vat_0_management_fee: 0,
    gross_management_fee: 78.94,
    total_fee_today: 85.7,
    total_liabilities: 2235.45,
    nouapd: 250000.0,
    plus_purchase: 0.0,
    less_redemption: 0.0,
    nouo: 250000.0,
    nav_per_unit: 10.2581,
    sub_price: 10.2582,
    redeem_price: 10.2581,
    nav_last_day: 10.2205,
    nav_today: 10.2581,
    daily_return: "0.37%",
    nav_change: 0.0376,
    nav_change_day: 0.0376
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <PDFViewer key="mydocView" style={{ width: "100%", height: 600 }}>
          <MyDocument dataSources={demoDatas} key="mydoc" />
        </PDFViewer>
         {/*<PDFDownloadLink
          document={<MyDocument dataSources={demoDatas} />}
          fileName="somename.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink> */}
      </div>
    );
  }
}

export default App;
