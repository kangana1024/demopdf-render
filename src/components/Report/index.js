import React from "react";

import { Document, Font } from "@react-pdf/renderer";
import { styles } from "../../styles";
import moment from "moment";
//import PageReport from "./PageReport";
import Profilestatus from "./Profilestatus";



const datas = {
  pid : "1234567890123",
  firstName : "John",
  lastName : "Doe",
  birthday : moment().format('L'),
  laser : "laser",
  profileStatus : true,
  profileCode : 1,
  passStatus : "Desc"
}
export default props => (
  <Document>
    {/*props.dataSources.map(res => {
      return <PageReport key={res.id} data={res} styles={styles} />;
    })*/}
    <Profilestatus key="profilestatus" data={datas} styles={styles}></Profilestatus>
  </Document>
);
Font.register({
  family: "THSarabunNew",
  src: require("../../assets/fonts/THSarabun.ttf")
});
Font.register({
  family: "THSarabunNewBold",
  src: require("../../assets/fonts/THSarabunBold.ttf")
});
Font.register({
  family: "supermarket",
  src: require("../../assets/fonts/supermarket.ttf")
});