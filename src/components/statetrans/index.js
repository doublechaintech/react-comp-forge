import { Button, List } from "antd";
import { Row, Col } from "antd";
import { useState, useEffect } from "react";
import styles from "./index.less";
import status from "./status.json";

import selectors from "./selector.json";

const range = (start, end, length = end - start + 1) =>
  Array.from({ length }, (_, i) => start + i);

const executeAction = ({ action, data }) => {
  console.log("switching view");

  const submitData = data;
  //delete submitData.actions

  //switchView(action.target, { message: '干得好', submitData });
};

const buildAction = ({ action, data }) => {
  return (
    <Button
      className={styles.footerAction}
      key={action.name}
      onClick={() => executeAction({ action, data })}
    >
      {action.name}
    </Button>
  );
};

const _UPDATE_STATUS = "UPDATE_STATUS";
const _RULE_LENGTH = 16;
const initRulesSet = () => {
  const rulesSet = {};

  selectors.forEach((selector) => {
    const rules = [];

    range(0, _RULE_LENGTH - 1).map((index) => {
      rules.push({ checked: false });
    });

    rulesSet[selector.code] = rules;
  });
  return rulesSet;
};

export default function StateTrans(props) {
  const { view = {} } = props;
  const { actionList, initURL } = view;
  const [merchant, setMerchant] = useState({});
  const data = { ...merchant };

  const [values, setValues] = useState(initRulesSet());

  const [selectedCode, setSelectedCode] = useState(_UPDATE_STATUS);

  const handleCheckChange = ({ event, code, index }) => {
    const rules = values[code];
    if (rules) {
      const rule = rules[index];
      rule.checked = true;
      const newValue = { ...values };
      newValue[code] = rules;
      setValues(newValue);
      return;
    }
  };

  const handleRuleChange = ({ event, code, index, seq}) => {

    console.log("event",event.target.value)
    const rules = values[code];
    const property=(seq===0?"fromStatus":"toStatus");
    if (rules) {
      const rule = rules[index];
      rule.checked = true;
      rule[property] = event.target.value;
      const newValue = { ...values };
      newValue[code] = rules;
      setValues(newValue);
      return;
    }
  };

  const selectorProps = {
    selectedCode,
    setSelectedCode,
    values,
    setValues,
    handleCheckChange,
    handleRuleChange,
  };

  return (
    <div className={styles.container}>
      <Row>
        <Col span={8}>
          <ItemSelector {...selectorProps} />
        </Col>
        <Col span={16}>
          <StateEditor {...selectorProps} />
        </Col>
      </Row>

      <Row>
        <Col span={20}>
          <div className={styles.actionArea} style={{ float: "right" }}>
            {actionList &&
              actionList.map((action) => buildAction({ action, data }))}
          </div>
        </Col>
      </Row>
    </div>
  );
}

const renderItem = ({ item, selectedCode, setSelectedCode }) => {
  if (item.code === selectedCode) {
    return (
      <List.Item key={item.code} className={styles.selectedItem}>
        <span className={styles.selectedItem}>{item.name}</span>
      </List.Item>
    );
  }

  return (
    <List.Item key={item.code} onClick={() => setSelectedCode(item.code)}>
      {item.name}
    </List.Item>
  );
};
function ItemSelector(props) {
  //const [selectedCode,setSelectedCode]=useState("UPDATE_STATUS")
  const { selectedCode, setSelectedCode } = props;
  const data = selectors.sort((a, b) => (a.name > b.name ? 1 : -1));

  return (
    <div
      id="scrollableDiv"
      style={{
        height: "58vh",
        overflow: "auto",
        padding: "0 0px",
        border: "1px solid rgba(140, 140, 140, 0.35)",
      }}
    >
      {" "}
      <List
        size="small"
        dataSource={data}
        renderItem={(item) =>
          renderItem({ item, setSelectedCode, selectedCode })
        }
      />
    </div>
  );
}

function StateEditor(props) {
  const {
    selectedCode,
    setSelectedCode,
    values,
    setValues,
    handleCheckChange,
    handleRuleChange,
  } = props;

  const rules = values[selectedCode];

  return (
    <div>
      <Row>
        <Col span={24}>
          <Row style={{ marginBottom: "20px" }}>
            <Col span={1}></Col>
            <Col span={3}></Col>
            <Col span={10}>
              <span className={styles.label}>操作前状态</span>
            </Col>
            <Col span={10}>
              <span className={styles.label}>操作后状态</span>
            </Col>
          </Row>

          {_UPDATE_STATUS === selectedCode && (
            <Row>
              <Col span={2}></Col>
              <Col>没有限制，可以任意转移状态</Col>
            </Row>
          )}

          {_UPDATE_STATUS !== selectedCode &&
            range(0, _RULE_LENGTH - 1).map((indexCase) => (
              <Row>
                <Col span={1}></Col>
                <Col span={3}>
                  <input
                    type="checkbox"
                    checked={rules[indexCase] && rules[indexCase].checked}
                    onChange={(event) =>
                      handleCheckChange({
                        event,
                        code: selectedCode,
                        index: indexCase,
                      })
                    }
                  />
                  情形{indexCase + 1}
                </Col>
                <Col span={10}>
                  <select className={styles.select}

                    onChange={(event) =>
                      handleRuleChange({
                        event,
                        code: selectedCode,
                        index: indexCase,
                        seq:0
                      })
                    }

                  >
                    {status.map((item, index) => (
                      <option value={item.code}>
                        S-{index + 1} {item.name}
                      </option>
                    ))}
                  </select>
                </Col>
                <Col span={10}>
                  <select className={styles.select}

                  onChange={(event) =>
                    handleRuleChange({
                      event,
                      code: selectedCode,
                      index: indexCase,
                      seq:1
                    })
                  }



                  >
                    {status.map((item, index) => (
                      <option value={item.code}>
                        S-{index + 1} {item.name}
                      </option>
                    ))}
                  </select>
                </Col>
              </Row>
            ))}
        </Col>
      </Row>
    </div>
  );
}

/*

| CHECKED_AFTER_FILL;待分析                 |
| CHECKED_BEFORE_FILL;充装前检查完毕        |
| CUSTOMER;已配送                           |
| DELIVERY;配送在途                         |
| DISABLED;冻结                             |
| DISCARDED;报废                            |
| EMPTY;空                                  |
| EMPTY_CHECKED;空，已预检                  |
| EMPTY_PICKED;空，已拣配                   |
| FILLED;充装中检查完毕                     |
| FULL;满瓶                                 |
| FULL_PICKED;满瓶，已拣配                  |
| INTERNAL_USE;内部领用                     |
| LOST;丢失                                 |
| MAINTAIN;维修                             |
| SELLED;出售                               |




*/
