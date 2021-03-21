import React from "react";

import { Page, Text, View } from "@react-pdf/renderer";

import Spece5 from "./spece5";

export default props => {
  const { styles } = props;
  const {
    name = "Mr. Tanit Plengsrisuk",
    uid = "DPAR0001",
    eq = 2024402.0,
    asDate = "04-Feb-2019 @ 05:00",
    bank_deposit_head = 542198.28,
    bank_deposit_desc = 542198.28,
    interest = 183.91,
    total_assets = 2024402.0,
    accured_fees = 2149.75,
    trusteeFee = 1339.75,
    managementFee = 810.0,
    net_asset = 2564634.44,
    custodian_fee = 6.32,
    vat_custodian_fee = 0.44,
    vat_0_dustodian = 0,
    gross_trusteeFee = 6.76,
    management_fee = 73.78,
    vat_management_fee = 5.16,
    vat_0_management_fee = 0,
    gross_management_fee = 78.94,
    total_fee_today = 85.7,
    total_liabilities = 2235.45,
    nouapd = 250000.0,
    plus_purchase = 0.0,
    less_redemption = 0.0,
    nouo = 250000.0,
    nav_per_unit = 10.2581,
    sub_price = 10.2582,
    redeem_price = 10.2581,
    nav_last_day = 10.2205,
    nav_today = 10.2581,
    daily_return = "0.37%",
    nav_change = 0.0376,
    nav_change_day = 0.0376
  } = props.data;
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.centerView}>
        <Text style={styles.headText}>
          Shoppee
        </Text>
        <Text style={styles.headText}>Fund Fact Sheet Report</Text>
        <Text style={styles.subHeadText}>{uid}</Text>
        <Text style={styles.subHeadText}>
          <Text style={styles.textRightInline}>{asDate}</Text>
        </Text>
        <Text style={{ ...styles.textCenter, ...{ marginTop:10 } }}>
          {name} by Shoppee
        </Text>
      </View>
      <View style={styles.reportBody}>
        <Text style={styles.textStrongUnderline}>ASSET</Text>

        <View style={styles.rRow}>
          <Text style={styles.rCol_Bold}>EQ</Text>
          <TextColBold styles={styles} value={eq.toLocaleString()} />
        </View>

        <View style={styles.rRow}>
          <Text style={styles.rCol_Bold}>FD-PN-DR-NCD-BE</Text>
          <Text style={{ ...styles.rCol_Bold, ...styles.rCol_Text_Right }}>
            {bank_deposit_head.toLocaleString()}
          </Text>
        </View>

        <View style={styles.rRow}>
          <Text style={styles.rCol}>
            <Spece5 />
            Bank Deposit
          </Text>
          <TextCol styles={styles} value={bank_deposit_desc.toLocaleString()} />
          <Text style={styles.rCol}>&nbsp;</Text>
        </View>

        <View style={styles.rRow}>
          <Text style={styles.rCol_Bold}>Accrued Incomes</Text>
        </View>

        <View style={styles.rRow}>
          <Text style={styles.rCol_1_half}>
            <Spece5 />
            Interest on เงินฝากธนาคาร/ตั๋วสัญญาใช้เงิน/ใบรับฝากเงิน/ต๋ัวแลกเงิน
          </Text>
          <TextColHalf styles={styles} value={interest.toLocaleString()} />
          <Text style={styles.rCol}>&nbsp;</Text>
        </View>

        <View style={styles.rRow}>
          <Text style={styles.rCol_Bold}>Total Assets</Text>
          <Text style={styles.rCol}>&nbsp;</Text>
          <TextColBoldBlue
            styles={styles}
            value={total_assets.toLocaleString()}
            hasBorder
          />
        </View>
      </View>

      <View style={styles.reportBody}>
        <Text style={styles.textStrongUnderline}>LIABILITIES</Text>

        <View style={styles.rRow}>
          <Text style={styles.rCol_Bold}>Accured Fees</Text>
          <TextColBold styles={styles} value={accured_fees.toLocaleString()} />
        </View>

        <View style={styles.rRow}>
          <Text style={styles.rCol}>
            <Spece5 />
            TrusteeFee
          </Text>
          <TextCol styles={styles} value={trusteeFee.toLocaleString()} />
          <Text style={styles.rCol}>&nbsp;</Text>
        </View>

        <View style={styles.rRow}>
          <Text style={styles.rCol}>
            <Spece5 />
            ManagementFee
          </Text>
          <TextCol styles={styles} value={managementFee.toLocaleString()} />
          <Text style={styles.rCol}>&nbsp;</Text>
        </View>

        <View style={styles.rRow}>
          <Text style={styles.rCol_Bold}>Net Asset Value BEFORE Fees</Text>
          <Text style={styles.rCol}>&nbsp;</Text>
          <TextColBoldBlue styles={styles} value={net_asset.toLocaleString()} />
        </View>

        <View style={styles.rRow}>
          <Text style={styles.rCol_Bold}>Today Fee</Text>
        </View>

        <View style={styles.rRow}>
          <Text style={styles.rCol}>
            <Spece5 />
            Custodian Fee
          </Text>
          <TextCol styles={styles} value={custodian_fee.toLocaleString()} />
          <Text style={styles.rCol}>&nbsp;</Text>
        </View>

        <View style={styles.rRow}>
          <Text style={styles.rCol}>
            <Spece5 />
            VAT 7% Custodian Fee
          </Text>
          <TextCol styles={styles} value={vat_custodian_fee.toLocaleString()} />
          <Text style={styles.rCol}>&nbsp;</Text>
        </View>

        <View style={styles.rRow}>
          <Text style={styles.rCol}>
            <Spece5 />
            VAT Claim 0% Custodian Fee
          </Text>
          <TextCol styles={styles} value={vat_0_dustodian.toLocaleString()} />
          <Text style={styles.rCol}>&nbsp;</Text>
        </View>

        <View style={styles.rRow}>
          <Text style={styles.rCol_1_half}>
            <Spece5 />
            Gross TrusteeFee
          </Text>
          <TextColBoldBlue
            isHalf
            styles={styles}
            value={gross_trusteeFee.toLocaleString()}
          />
          <Text style={styles.rCol}>&nbsp;</Text>
        </View>

        <View style={styles.rRow}>
          <Text style={styles.rCol}>
            <Spece5 />
            Management Fee
          </Text>
          <TextCol styles={styles} value={management_fee.toLocaleString()} />
          <Text style={styles.rCol}>&nbsp;</Text>
        </View>

        <View style={styles.rRow}>
          <Text style={styles.rCol}>
            <Spece5 />
            VAT 7% Management Fee
          </Text>
          <TextCol
            styles={styles}
            value={vat_management_fee.toLocaleString()}
          />
          <Text style={styles.rCol}>&nbsp;</Text>
        </View>

        <View style={styles.rRow}>
          <Text style={styles.rCol}>
            <Spece5 />
            VAT Claim 0% Management Fee
          </Text>
          <TextCol
            styles={styles}
            value={vat_0_management_fee.toLocaleString()}
          />
          <Text style={styles.rCol}>&nbsp;</Text>
        </View>

        <View style={styles.rRow}>
          <Text style={styles.rCol_1_half}>
            <Spece5 />
            Gross ManagementFee
          </Text>
          <TextColBoldBlue
            isHalf
            styles={styles}
            value={gross_management_fee.toLocaleString()}
          />
          <Text style={styles.rCol}>&nbsp;</Text>
        </View>

        <View style={styles.rRow}>
          <Text style={styles.rCol}>Total Fee Today</Text>
          <TextCol styles={styles} value={total_fee_today.toLocaleString()} />
        </View>

        <View style={styles.rRow}>
          <Text style={styles.rCol_Bold}>Total Liabilities</Text>
          <TextColBold
            styles={styles}
            value={total_liabilities.toLocaleString()}
          />
        </View>

        <View style={styles.rRow}>
          <Text style={styles.rCol_Bold}>Net Asset Value</Text>
          <Text style={styles.rCol}>&nbsp;</Text>
          <TextColBoldBlue
            styles={styles}
            value={total_liabilities.toLocaleString()}
            borderBSize={2}
          />
        </View>

        <View style={styles.rRow}>
          <Text style={styles.rCol}>Number of Units at Previous Day</Text>
          <TextCol styles={styles} value={nouapd.toLocaleString()} />
        </View>

        <View style={styles.rRow}>
          <Text style={styles.rCol}>Plus : Purchase</Text>
          <TextCol styles={styles} value={plus_purchase.toLocaleString()} />
        </View>

        <View style={styles.rRow}>
          <Text style={styles.rCol}>Less : Redemption</Text>
          <TextCol styles={styles} value={less_redemption.toLocaleString()} />
        </View>

        <View style={styles.rRow}>
          <Text style={styles.rCol_Bold}>Number of Units Outstanding</Text>
          <Text style={styles.rCol}>&nbsp;</Text>
          <TextColBoldBlue
            styles={styles}
            value={nouo.toLocaleString()}
            borderBSize={2}
          />
        </View>
      </View>

      <View style={styles.reportBody}>
        <View style={styles.rRow}>
          <TextCol styles={styles} value={"NAV per Unit"} />
          <TextColHalf styles={styles} value={"Subscription Price"} />
          <TextColHalf styles={styles} value={"Redemption Price"} />
          <TextCol styles={styles} value={" "} />
        </View>

        <View style={styles.rRow}>
          <TextColBoldBlue
            styles={styles}
            value={nav_per_unit.toLocaleString()}
          />
          <TextColBoldBlue
            styles={styles}
            isHalf
            value={sub_price.toLocaleString()}
          />
          <TextColBoldBlue
            styles={styles}
            isHalf
            value={redeem_price.toLocaleString()}
          />
          <TextCol styles={styles} value={""} />
        </View>

        <View style={styles.reportFooter}>
          <View style={styles.rRow}>
            <Text style={styles.rCol}>&nbsp;</Text>
            <Text style={{ ...styles.borderBottomBlack, ...styles.rCol }}>
              &nbsp;
            </Text>
            <Text style={styles.rCol_half}>&nbsp;</Text>
            <Text style={{ ...styles.borderBottomBlack, ...styles.rCol }}>
              &nbsp;
            </Text>
            <Text style={styles.rCol_half}>&nbsp;</Text>
          </View>

          <View style={styles.rRow}>
            <Text style={{ ...styles.rCol, ...styles.rCol_Text_Right }}>
              Confirm by &amp; Time
              <Spece5 />
            </Text>
            <Text
              style={{
                ...styles.rCol,
                ...styles.textCenter,
                ...styles.textStrong
              }}
            >
              Authorized By Shoppee
            </Text>
            <Text style={styles.rCol_half}>&nbsp;</Text>
            <Text
              style={{
                ...styles.rCol,
                ...styles.textCenter,
                ...styles.textStrong
              }}
            >
              Authorized By Custodian
            </Text>
            <Text style={styles.rCol_half}>&nbsp;</Text>
          </View>

          <View
            style={{
              ...styles.rRow,
              ...styles.borderBlackVR,
              ...{ marginTop: 15 }
            }}
          >
            <Text style={styles.rCol_l_border}>NAV Last Day</Text>
            <Text style={styles.rCol_l_border}>NAV Today</Text>
            <Text style={styles.rCol_l_border}>Daily Return</Text>
            <Text style={styles.rCol_l_border}>NAV Change</Text>
            <Text style={styles.rCol_l_border}>NAV Change/Day</Text>
          </View>
          <View
            style={{
              ...styles.rRow,
              ...styles.borderBlackVR,
              ...{ borderTopWidth: 0,marginTop: -1 }
            }}
          >
            <Text style={styles.rCol_l_border_blue}>
              {nav_last_day.toLocaleString()}
            </Text>
            <Text style={styles.rCol_l_border}>
              {nav_today.toLocaleString()}
            </Text>
            <Text style={styles.rCol_l_border}>
              {daily_return.toLocaleString()}
            </Text>
            <Text style={styles.rCol_l_border}>
              {nav_change.toLocaleString()}
            </Text>
            <Text style={styles.rCol_l_border}>
              {nav_change_day.toLocaleString()}
            </Text>
          </View>
        </View>
      </View>
    </Page>
  );
};

const TextColBold = props => {
  const { styles } = props;
  return (
    <Text style={{ ...styles.rCol_Bold, ...styles.rCol_Text_Right }}>
      {props.value}
    </Text>
  );
};
const TextColBoldBlue = props => {
  const { styles, hasBorder = false, isHalf = false, borderBSize } = props;
  let isBorder = hasBorder ? { ...styles.borderBlackV } : {};
  let flexSize = isHalf
    ? { ...styles.rCol_Half_Bold }
    : { ...styles.rCol_Bold };
  let borderBB =
    typeof borderBSize !== "undefined"
      ? {
          borderTopColor: "black",
          borderTopStyle: "solid",
          borderTopWidth: 1,
          borderBottomColor: "black",
          borderBottomStyle: "solid",
          borderBottomWidth: borderBSize
        }
      : {};
  return (
    <Text
      style={{
        ...flexSize,
        ...styles.bluebg,
        ...styles.rCol_Text_Right,
        ...isBorder,
        ...borderBB
      }}
    >
      {props.value}
    </Text>
  );
};

const TextCol = props => {
  const { styles } = props;
  return (
    <Text style={{ ...styles.rCol, ...styles.rCol_Text_Right }}>
      {props.value}
    </Text>
  );
};
const TextColHalf = props => {
  const { styles } = props;
  return (
    <Text style={{ ...styles.rCol_half, ...styles.rCol_Text_Right }}>
      {props.value}
    </Text>
  );
};
