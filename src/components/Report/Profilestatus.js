import React from "react";

import { Page, Text, View, Image } from "@react-pdf/renderer";

import Spece5 from "./spece5";
import moment from "moment";

export default props => {
  const { styles } = props;
  const {
    pid = "1234567890123",
    firstName = "",
    lastName = "",
    birthday = "",
    laser = "",
    profileStatus = false,
    profileCode = 1,
    passStatus = "Desc",
    userLoginName = "Jan Doe"
  } = props.data;
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.centerView}>
        <Image
          style={{
            width: "30%",
            alignSelf: "center"
          }}
          source={require("../../assets/images/logopdf.jpg")}
        />
        <Text style={styles.headGreenText}>
          DENALI PRESTIGE ASSET MANAGEMENT LIMITED
        </Text>
      </View>
      <View style={styles.centerView}>
        <Text style={styles.headMarketCenter}>
          รายงานผลการตรวจสอบสถานะของบัตรประชาชน
        </Text>
        <Text style={styles.headMarketCenter}>ผ่านฐานข้อมูลกรมการปกครอง</Text>
      </View>
      <View style={{ ...styles.leftView, ...styles.m20 }}>
        <Text style={styles.headMarketLeft}>ข้อมูลที่ส่งไปตรวจสอบ</Text>
      </View>
      <View style={styles.reportBody}>
        <View style={styles.rRow}>
          <TextCol
            styles={styles}
            style={styles.borderBlackL}
            value={"หมายเลขประจำตัวประชาชน"}
            hastop
          />
          <TextCol styles={styles} value={pid} hastop />
        </View>
        <View style={styles.rRow}>
          <TextCol
            styles={styles}
            style={styles.borderBlackL}
            value={"ชื่อ-นามสกุล"}
          />
          <TextCol styles={styles} value={firstName + " " + lastName} />
        </View>
        <View style={styles.rRow}>
          <TextCol
            styles={styles}
            style={styles.borderBlackL}
            value={"วันเกิด"}
          />
          <TextCol styles={styles} value={birthday} />
        </View>
        <View style={styles.rRow}>
          <TextCol
            styles={styles}
            style={styles.borderBlackL}
            value={"หมายเลข Laser หลังบัตร"}
          />
          <TextCol styles={styles} value={laser} />
        </View>
      </View>
      <View style={{ ...styles.leftView, ...styles.m20 }}>
        <Text style={styles.headMarketLeft}>ผลการตรวจสอบ</Text>
      </View>
      <View style={styles.leftView}>
        <Text style={styles.textLeft}>
          ข้อผิดพลาดจากการตรวจสอบ: <Spece5 />
          {profileStatus ? (
            <Text style={styles.textGreenLeft}> ไม่มี&nbsp;</Text>
          ) : (
            <Text style={styles.textRedLeft}> มี&nbsp;</Text>
          )}
        </Text>
        <Text style={styles.textLeft}>
          รหัสผลการตรวจสอบสถานะบัตร: <Spece5 />
          <Text style={styles.textLeftBold}>{profileCode}</Text>
        </Text>
        <Text style={styles.textLeft}>
          ผลการตรวจสอบสถานะบัตร: <Spece5 />
          <Text style={styles.textLeftBold}>{passStatus}</Text>
        </Text>
      </View>
      <View style={styles.reportBody}>
        <View style={styles.rRow}>
          <View style={{ ...styles.rCol, ...{ flex: 1 } }}>
            <Text>&nbsp;</Text>
          </View>
          <View style={{ ...styles.rCol, ...{ flex: 3 } }}>
            <Text>&nbsp;</Text>
          </View>
          <View
            style={{
              ...styles.rCol,
              ...{ flex: 2 }
            }}
          >
            <Text style={styles.textCenterBold}>ลงชื่อ</Text>
          </View>
          <View style={{ ...styles.rCol, ...{ flex: 1 } }}>
            <Text>&nbsp;</Text>
          </View>
        </View>
        <View style={styles.rRow}>
          <View style={{ ...styles.rCol, ...{ flex: 1 } }}>
            <Text>&nbsp;</Text>
          </View>
          <View style={{ ...styles.rCol, ...{ flex: 3 } }}>
            <View
              style={{
                ...styles.leftView,
                ...styles.borderBlackBottom
              }}
            >
              <Text>&nbsp;</Text>
            </View>
          </View>
          <View style={{ ...styles.rCol, ...{ flex: 2 } }}>
            <Text style={styles.textCenterBold}>ผู้ส่งข้อมูลตรวจสอบ</Text>
          </View>
          <View style={{ ...styles.rCol, ...{ flex: 1 } }}>
            <Text>&nbsp;</Text>
          </View>
        </View>
        <View style={styles.rRow}>
          <View style={{ ...styles.rCol, ...{ flex: 1 } }}>
            <Text>&nbsp;</Text>
          </View>
          <View style={{ ...styles.rCol, ...{ flex: 3 } }}>
            <Text style={styles.textCenterBold}>
              (ชื่อ {userLoginName} เข้ามาตรวจ){" "}
            </Text>
          </View>
          <View
            style={{
              ...styles.rCol,
              ...{ flex: 2 }
            }}
          >
            <Text>&nbsp;</Text>
          </View>
          <View style={{ ...styles.rCol, ...{ flex: 1 } }}>
            <Text>&nbsp;</Text>
          </View>
        </View>
        <View style={styles.rRow}>
          <View style={{ ...styles.rCol, ...{ flex: 1 } }}>
            <Text>&nbsp;</Text>
          </View>
          <View style={{ ...styles.rCol, ...{ flex: 3 } }}>
            <Text style={styles.textCenterBold}>{moment().format("l")}</Text>
          </View>
          <View
            style={{
              ...styles.rCol,
              ...{ flex: 2 }
            }}
          >
            <Text>&nbsp;</Text>
          </View>
          <View style={{ ...styles.rCol, ...{ flex: 1 } }}>
            <Text>&nbsp;</Text>
          </View>
        </View>
      </View>
      <View style={styles.rRow}>
        <View style={styles.footerPage}>
          <Text style={styles.textSmallBold}>
            Denali Prestige Asset Management Limited
          </Text>
          <Text style={styles.textCenterfooter}>
            Level 15, Park Ventures Ecoplex, 57 Wireless Road, Lumpini,
            Patumwan, Bangkok 10330, Thailand
          </Text>
          <Text style={styles.textCenterfooter}>
            Tel: +66 2 119 5659 | Fax: +662 119 5600 | E-mail:
            contact@denali-asset.com | www.denali-asset.com
          </Text>
        </View>
      </View>
    </Page>
  );
};

const TextCol = props => {
  const { styles, hastop = false } = props;
  const hastopstyle = hastop ? styles.borderBlackVR_hastop : {};
  return (
    <Text
      style={{
        ...styles.rCol,
        ...styles.rCol_Text_Left,
        ...styles.borderBlackVR_notop,
        ...props.style,
        paddingLeft: 10,
        paddingVertical: 5,
        fontSize: 16,
        ...hastopstyle
      }}
    >
      {props.value}
    </Text>
  );
};
