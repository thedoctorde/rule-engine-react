import React from 'react'
import {mount, shallow, configure} from 'enzyme'
import {EventTablePage} from "./EventTablePage";
import Adapter from 'enzyme-adapter-react-15';
import {configureStoreForTest} from '../../store/configureStore';
import {MemoryRouter as Router} from 'react-router-dom'
import EventTableRow from './EventTableRow';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PropTypes from 'prop-types';

configure({adapter: new Adapter()});

let state = {
  actions: {
    "7e825fe4-183f-42b2-b365-fb0aed3581e0": {
      "action": "create",
      "type": "instant",
      "moment": "ultm",
      "expire": 30,
      "expire_type": "elapsed_time",
      "id": "7e825fe4-183f-42b2-b365-fb0aed3581e0"
    },
    "23888717-85a9-473c-b9ce-89f66fdda99a": {
      "action": "create",
      "type": "instant",
      "moment": "uwup",
      "expire": 30,
      "expire_type": "elapsed_time",
      "id": "23888717-85a9-473c-b9ce-89f66fdda99a"
    },
    "8ac2fb59-03e2-466e-a05a-6aae45569443": {
      "action": "create",
      "type": "instant",
      "moment": "uahm",
      "expire": 30,
      "expire_type": "elapsed_time",
      "id": "8ac2fb59-03e2-466e-a05a-6aae45569443"
    },
    "b3cd14a5-a827-452c-a091-0685592aa95b": {
      "action": "create",
      "type": "instant",
      "moment": "uhme",
      "expire": 600,
      "expire_type": "elapsed_time",
      "id": "b3cd14a5-a827-452c-a091-0685592aa95b"
    },
    "a67ed620-deff-476d-9517-7565b401bca3": {
      "action": "remove",
      "moment": "uwrk",
      "id": "a67ed620-deff-476d-9517-7565b401bca3"
    },
    "f527213e-4c4c-4714-b12b-5fb3de1a85ce": {
      "action": "create",
      "type": "instant",
      "moment": "uawk",
      "expire": 30,
      "expire_type": "elapsed_time",
      "id": "f527213e-4c4c-4714-b12b-5fb3de1a85ce"
    },
    "becb847c-1518-4d31-b8da-08489351f3ad": {
      "action": "create",
      "type": "instant",
      "moment": "uwrk",
      "expire": 600,
      "expire_type": "elapsed_time",
      "id": "becb847c-1518-4d31-b8da-08489351f3ad"
    },
    "fd74de2a-7b8e-4d53-b427-387341bb34f2": {
      "action": "remove",
      "moment": "uhme",
      "id": "fd74de2a-7b8e-4d53-b427-387341bb34f2"
    },
    "44476c0e-3467-4aea-ac3d-aa30276e2b61": {
      "action": "create",
      "type": "instant",
      "moment": "ulwk",
      "expire": 30,
      "expire_type": "elapsed_time",
      "id": "44476c0e-3467-4aea-ac3d-aa30276e2b61"
    },
    "5572b782-040f-47fe-a11f-c2cd45d378f9": {
      "action": "remove",
      "moment": "uwrk",
      "id": "5572b782-040f-47fe-a11f-c2cd45d378f9"
    },
    "b517e320-9094-44ec-94cb-fd82f051cee4": {
      "action": "create",
      "type": "instant",
      "moment": "unat",
      "expire": 30,
      "expire_type": "elapsed_time",
      "id": "b517e320-9094-44ec-94cb-fd82f051cee4"
    },
    "c6a5e25d-d1b0-4780-84c6-b5a50a355820": {
      "action": "create",
      "type": "instant",
      "moment": "uwte",
      "expire": 14,
      "expire_type": "at",
      "id": "c6a5e25d-d1b0-4780-84c6-b5a50a355820"
    },
    "6c165076-fefe-4858-9539-cd008a1afae8": {
      "action": "create",
      "type": "instant",
      "moment": "ulwk",
      "expire": 30,
      "expire_type": "elapsed_time",
      "id": "6c165076-fefe-4858-9539-cd008a1afae8"
    },
    "119744c2-a2b2-4c52-920d-daa34a5ca573": {
      "action": "create",
      "type": "instant",
      "moment": "ulwk",
      "expire": 30,
      "expire_type": "elapsed_time",
      "id": "119744c2-a2b2-4c52-920d-daa34a5ca573"
    },
    "637713cf-79e9-4c8c-9d7c-ff342f525f00": {
      "action": "create",
      "type": "delay",
      "delay_time": 600,
      "moment": "uwup",
      "expire": 30,
      "expire_type": "elapsed_time",
      "id": "637713cf-79e9-4c8c-9d7c-ff342f525f00"
    },
    "a742225f-e309-4068-ad16-be0b1c63931b": {
      "action": "create",
      "type": "instant",
      "moment": "uwup",
      "expire": 30,
      "expire_type": "elapsed_time",
      "id": "a742225f-e309-4068-ad16-be0b1c63931b"
    },
    "7aeb021a-f98d-401b-8643-593ab9101f03": {
      "action": "create",
      "type": "instant",
      "moment": "uwup",
      "expire": 30,
      "expire_type": "elapsed_time",
      "id": "7aeb021a-f98d-401b-8643-593ab9101f03"
    }
  },
  events: {
    "a8c1a9ec7bf14d68aaabd788223a40fd": {
      "run_on": ["earcon"],
      "ruleset": ["c0b244d5-10b5-4211-863c-0a2e16f033d3"],
      "actions": ["7e825fe4-183f-42b2-b365-fb0aed3581e0"],
      "priority": 1000,
      "active": false,
      "id": "a8c1a9ec7bf14d68aaabd788223a40fd",
      "rev": 1,
      "isFetched": true
    },
    "6755acab081e47b191bfc27c7d51e310": {
      "run_on": ["scron"],
      "ruleset": ["eccb0bf8-facd-4a47-8ab8-0bf0c6367b20", "a171f8aa-c6b4-486e-8a38-1562d01952de"],
      "actions": ["23888717-85a9-473c-b9ce-89f66fdda99a"],
      "priority": 1000,
      "active": true,
      "id": "6755acab081e47b191bfc27c7d51e310",
      "rev": 1,
      "isFetched": true
    },
    "2a3f29c31c1a49cfa7ee2f46dd61c2bc": {
      "run_on": ["wpul"],
      "ruleset": ["75b3f3f6-a0ea-4e2d-a58f-9f7c2750c2bc", "39d6217e-6c27-4e78-9812-f7b78296ff5c"],
      "actions": ["8ac2fb59-03e2-466e-a05a-6aae45569443", "b3cd14a5-a827-452c-a091-0685592aa95b", "a67ed620-deff-476d-9517-7565b401bca3"],
      "priority": 1000,
      "active": true,
      "id": "2a3f29c31c1a49cfa7ee2f46dd61c2bc",
      "rev": 1,
      "isFetched": true
    },
    "57abbb7595e741af90812e323c530efe": {
      "run_on": ["wpul"],
      "ruleset": ["38130d49-81e4-4675-b6e3-d723ddd7f2a6", "3d7e9614-4a1e-45d7-94c4-2d1660beb371"],
      "actions": ["f527213e-4c4c-4714-b12b-5fb3de1a85ce", "becb847c-1518-4d31-b8da-08489351f3ad", "fd74de2a-7b8e-4d53-b427-387341bb34f2"],
      "priority": 1000,
      "active": true,
      "id": "57abbb7595e741af90812e323c530efe",
      "rev": 1,
      "isFetched": true
    },
    "f32fc16d79e44fddad361fde995d9c39": {
      "run_on": ["wpul"],
      "ruleset": ["67513a5f-6d4c-4436-8a51-04fde4a06d44", "5dff21c2-5570-4398-9d9c-6fc7b2549132", "a408b433-1616-4e87-b582-df6f0f3569d2"],
      "actions": ["44476c0e-3467-4aea-ac3d-aa30276e2b61", "5572b782-040f-47fe-a11f-c2cd45d378f9"],
      "priority": 1000,
      "active": true,
      "id": "f32fc16d79e44fddad361fde995d9c39",
      "rev": 1,
      "isFetched": true
    },
    "7d3d670f531e47af8589e7002b65772e": {
      "run_on": ["acap"],
      "ruleset": ["d48d8b6b-7a72-435a-9e8d-1ad0a7b235f1"],
      "actions": ["b517e320-9094-44ec-94cb-fd82f051cee4"],
      "priority": 1000,
      "active": true,
      "id": "7d3d670f531e47af8589e7002b65772e",
      "rev": 1,
      "isFetched": true
    },
    "7d3d670f531e47af8589e7002b65772e0": {
      "run_on": ["reapc"],
      "ruleset": ["c099963c-1a02-449f-993d-742c85dc1931", "fd83d4b5-8209-4ec5-aeda-892b6174be29"],
      "actions": ["c6a5e25d-d1b0-4780-84c6-b5a50a355820"],
      "priority": 500,
      "active": true,
      "id": "7d3d670f531e47af8589e7002b65772e0",
      "rev": 1,
      "isFetched": true
    },
    "7d3d670f531e47af8589e7002b65772e1": {
      "run_on": ["reapc"],
      "ruleset": ["c7329638-3493-4a8c-ba93-09e10c2e8ee4", "5ad4d06a-5765-4b49-b763-d8a69bcdf717"],
      "actions": ["6c165076-fefe-4858-9539-cd008a1afae8"],
      "priority": 500,
      "active": true,
      "id": "7d3d670f531e47af8589e7002b65772e1",
      "rev": 1,
      "isFetched": true
    },
    "7d3d670f531e47af8589e7002b65772e2": {
      "run_on": ["reapc"],
      "ruleset": ["b5197aa2-9e28-4c43-95b8-e6c8759ba835", "7718171a-769d-4631-94bd-b20c831c00aa"],
      "actions": ["119744c2-a2b2-4c52-920d-daa34a5ca573"],
      "priority": 500,
      "active": true,
      "id": "7d3d670f531e47af8589e7002b65772e2",
      "rev": 1,
      "isFetched": true
    },
    "7d3d670f531e47af8589e7002b65772e3": {
      "run_on": ["reapc"],
      "ruleset": ["58cf0c58-435b-447c-b0b1-a8c4bb2547b6", "a47b40e0-f862-4b25-8d3c-26f91d520480", "80cf7f0a-c357-47a6-ae91-3509a7c0f19a"],
      "actions": ["637713cf-79e9-4c8c-9d7c-ff342f525f00"],
      "priority": 500,
      "active": true,
      "id": "7d3d670f531e47af8589e7002b65772e3",
      "rev": 1,
      "isFetched": true
    },
    "7d3d670f531e47af8589e7002b65772e4": {
      "run_on": ["reapc"],
      "ruleset": ["9043b382-08ed-4ca2-9030-020daa39463e", "6748b3c1-193d-4280-a245-8a666f1a3bd3", "81bd4e14-e1ad-40bf-90ec-435b67dcf99d"],
      "actions": ["a742225f-e309-4068-ad16-be0b1c63931b"],
      "priority": 500,
      "active": true,
      "id": "7d3d670f531e47af8589e7002b65772e4",
      "rev": 1,
      "isFetched": true
    },
    "7d3d670f531e47af8589e7002b65772e5": {
      "run_on": ["reapc"],
      "ruleset": ["627078f7-0f47-4147-a08f-5da86a3405d9", "a481d89f-3ae6-4907-a9db-6890ca4a2f3d", "e0f11b72-f079-42f4-b124-7d4916de1cf1"],
      "actions": ["7aeb021a-f98d-401b-8643-593ab9101f03"],
      "priority": 500,
      "active": true,
      "id": "7d3d670f531e47af8589e7002b65772e5",
      "rev": 1,
      "isFetched": true
    }
  },
  rules: {
    "c0b244d5-10b5-4211-863c-0a2e16f033d3": {
      "type": "param",
      "name": "earcon",
      "operator": "=",
      "value": true,
      "id": "c0b244d5-10b5-4211-863c-0a2e16f033d3"
    },
    "eccb0bf8-facd-4a47-8ab8-0bf0c6367b20": {
      "type": "hour_between",
      "min": 6,
      "max": 9,
      "id": "eccb0bf8-facd-4a47-8ab8-0bf0c6367b20"
    },
    "a171f8aa-c6b4-486e-8a38-1562d01952de": {
      "type": "last_moments",
      "name": "uwup",
      "operator": "not in",
      "id": "a171f8aa-c6b4-486e-8a38-1562d01952de"
    },
    "75b3f3f6-a0ea-4e2d-a58f-9f7c2750c2bc": {
      "type": "moment_timing",
      "name": "uahm",
      "after": "ulhm",
      "id": "75b3f3f6-a0ea-4e2d-a58f-9f7c2750c2bc"
    },
    "39d6217e-6c27-4e78-9812-f7b78296ff5c": {
      "type": "compare_params",
      "param1": "wpul",
      "operator": "intersects",
      "param2": "wfng",
      "id": "39d6217e-6c27-4e78-9812-f7b78296ff5c"
    },
    "38130d49-81e4-4675-b6e3-d723ddd7f2a6": {
      "type": "moment_timing",
      "name": "uawk",
      "after": "ulwk",
      "id": "38130d49-81e4-4675-b6e3-d723ddd7f2a6"
    },
    "3d7e9614-4a1e-45d7-94c4-2d1660beb371": {
      "type": "compare_params",
      "param1": "wpul",
      "operator": "intersects",
      "param2": "wfmo",
      "id": "3d7e9614-4a1e-45d7-94c4-2d1660beb371"
    },
    "67513a5f-6d4c-4436-8a51-04fde4a06d44": {
      "type": "moment_timing",
      "name": "ulwk",
      "after": "uawk",
      "id": "67513a5f-6d4c-4436-8a51-04fde4a06d44"
    },
    "5dff21c2-5570-4398-9d9c-6fc7b2549132": {
      "type": "last_moments",
      "name": "ulwk",
      "operator": "in",
      "id": "5dff21c2-5570-4398-9d9c-6fc7b2549132"
    },
    "a408b433-1616-4e87-b582-df6f0f3569d2": {
      "type": "compare_params",
      "param1": "wpul",
      "operator": "not intersects",
      "param2": "wfmo",
      "id": "a408b433-1616-4e87-b582-df6f0f3569d2"
    },
    "d48d8b6b-7a72-435a-9e8d-1ad0a7b235f1": {
      "type": "mapping",
      "name": "acap",
      "operator": "in",
      "mapping_name": "app2actions",
      "value": ["saot"],
      "id": "d48d8b6b-7a72-435a-9e8d-1ad0a7b235f1"
    },
    "c099963c-1a02-449f-993d-742c85dc1931": {
      "type": "hour_between",
      "min": 10,
      "max": 14,
      "id": "c099963c-1a02-449f-993d-742c85dc1931"
    },
    "fd83d4b5-8209-4ec5-aeda-892b6174be29": {
      "type": "complex_param",
      "name": "wfcn",
      "rules": ["15e2e046-7e93-468b-88a0-76942df1814e", "a46f15a5-86e2-40ee-927a-589816278dd6"],
      "id": "fd83d4b5-8209-4ec5-aeda-892b6174be29"
    },
    "c7329638-3493-4a8c-ba93-09e10c2e8ee4": {
      "type": "param",
      "name": "usloc",
      "operator": "=",
      "value": 4,
      "id": "c7329638-3493-4a8c-ba93-09e10c2e8ee4"
    },
    "5ad4d06a-5765-4b49-b763-d8a69bcdf717": {
      "type": "old_vs_new",
      "name": "usloc",
      "operator": "!=",
      "id": "5ad4d06a-5765-4b49-b763-d8a69bcdf717"
    },
    "b5197aa2-9e28-4c43-95b8-e6c8759ba835": {
      "type": "old_vs_new",
      "name": "usloc",
      "operator": "!=",
      "id": "b5197aa2-9e28-4c43-95b8-e6c8759ba835"
    },
    "7718171a-769d-4631-94bd-b20c831c00aa": {
      "type": "old",
      "name": "usloc",
      "operator": "=",
      "value": 3,
      "id": "7718171a-769d-4631-94bd-b20c831c00aa"
    },
    "58cf0c58-435b-447c-b0b1-a8c4bb2547b6": {
      "type": "complex_param",
      "name": "wfcn",
      "rules": ["2e31951b-3948-4786-a95c-d89a01ee4523", "feb0f91c-fe9c-4ea3-8eee-11f1fca35532"],
      "id": "58cf0c58-435b-447c-b0b1-a8c4bb2547b6"
    },
    "a47b40e0-f862-4b25-8d3c-26f91d520480": {
      "type": "last_moments",
      "name": "uawk",
      "operator": "in",
      "id": "a47b40e0-f862-4b25-8d3c-26f91d520480"
    },
    "80cf7f0a-c357-47a6-ae91-3509a7c0f19a": {
      "type": "last_moments",
      "name": "ulwk",
      "operator": "not in",
      "id": "80cf7f0a-c357-47a6-ae91-3509a7c0f19a"
    },
    "9043b382-08ed-4ca2-9030-020daa39463e": {
      "type": "hour_between",
      "min": 9,
      "max": 23,
      "id": "9043b382-08ed-4ca2-9030-020daa39463e"
    },
    "6748b3c1-193d-4280-a245-8a666f1a3bd3": {
      "type": "complex_param",
      "name": "wfcn",
      "rules": ["7f84ae29-812f-46e6-8cd3-82dc4239c036", "a967091c-8caf-4262-ba06-89ea63ee94ef"],
      "id": "6748b3c1-193d-4280-a245-8a666f1a3bd3"
    },
    "81bd4e14-e1ad-40bf-90ec-435b67dcf99d": {
      "type": "last_moments",
      "name": "uwup",
      "operator": "in",
      "id": "81bd4e14-e1ad-40bf-90ec-435b67dcf99d"
    },
    "627078f7-0f47-4147-a08f-5da86a3405d9": {
      "type": "hour_between",
      "min": 9,
      "max": 13,
      "id": "627078f7-0f47-4147-a08f-5da86a3405d9"
    },
    "a481d89f-3ae6-4907-a9db-6890ca4a2f3d": {
      "type": "param",
      "name": "scron",
      "operator": "=",
      "value": true,
      "id": "a481d89f-3ae6-4907-a9db-6890ca4a2f3d"
    },
    "e0f11b72-f079-42f4-b124-7d4916de1cf1": {
      "type": "last_moments",
      "name": "uwup",
      "operator": "not in",
      "id": "e0f11b72-f079-42f4-b124-7d4916de1cf1"
    }
  },
  subrules: {
    "15e2e046-7e93-468b-88a0-76942df1814e": {
      "field": "connected",
      "operator": "=",
      "value": true,
      "value_type": "boolean",
      "id": "15e2e046-7e93-468b-88a0-76942df1814e"
    },
    "a46f15a5-86e2-40ee-927a-589816278dd6": {
      "field": "name",
      "operator": "=",
      "value": "wfct",
      "value_type": "field",
      "id": "a46f15a5-86e2-40ee-927a-589816278dd6"
    },
    "2e31951b-3948-4786-a95c-d89a01ee4523": {
      "field": "connected",
      "operator": "=",
      "value": false,
      "value_type": "boolean",
      "id": "2e31951b-3948-4786-a95c-d89a01ee4523"
    },
    "feb0f91c-fe9c-4ea3-8eee-11f1fca35532": {
      "field": "name",
      "operator": "=",
      "value": "wfct",
      "value_type": "field",
      "id": "feb0f91c-fe9c-4ea3-8eee-11f1fca35532"
    },
    "7f84ae29-812f-46e6-8cd3-82dc4239c036": {
      "field": "connected",
      "operator": "=",
      "value": true,
      "value_type": "boolean",
      "id": "7f84ae29-812f-46e6-8cd3-82dc4239c036"
    },
    "a967091c-8caf-4262-ba06-89ea63ee94ef": {
      "field": "name",
      "operator": "=",
      "value": "wfho",
      "value_type": "field",
      "id": "a967091c-8caf-4262-ba06-89ea63ee94ef"
    }
  },
  paramNames: [
    {id: "inapc", value: "inapc", valueType: "Instapcat", type: "complex"},
    {id: "reap", value: "reap", valueType: "Resactap", type: "complex"},
    {id: "reapc", value: "reapc", valueType: "Resactapcat", type: "complex"},
    {id: "acapc", value: "acapc", valueType: "Acapc", type: "complex"},
    {id: "savloc", value: "savloc", valueType: "Savloc", type: "complex"},
    {id: "wpul", value: "wpul", valueType: "Wpul", type: "complex"},
    {id: "wfng", value: "wfng", valueType: "Wfng", type: "complex"},
    {id: "wfmo", value: "wfmo", valueType: "Wfmo", type: "complex"},
    {id: "bcon", value: "bcon", valueType: "Btconn", type: "complex"},
    {id: "wfcn", value: "wfcn", valueType: "WifiCon", type: "complex"},
    {id: "wfpx", value: "wfpx", valueType: "WifiProxy", type: "complex"},
    {id: "glod", value: "glod", valueType: "IntParam", type: "simple"},
    {id: "inslun", value: "inslun", valueType: "StringToIntParam", type: "simple"},
    {id: "foreapp", value: "foreapp", valueType: "StringParam", type: "simple"},
    {id: "scron", value: "scron", valueType: "BoolParam", type: "simple"},
    {id: "ulve", value: "ulve", valueType: "StringParam", type: "simple"},
    {id: "usloc", value: "usloc", valueType: "StringToIntParam", type: "simple"},
    {id: "dos", value: "dos", valueType: "StringParam", type: "simple"},
    {id: "dmod", value: "dmod", valueType: "StringParam", type: "simple"},
    {id: "slang", value: "slang", valueType: "StringParam", type: "simple"},
    {id: "ctype", value: "ctype", valueType: "StringParam", type: "simple"},
    {id: "mctype", value: "mctype", valueType: "StringParam", type: "simple"},
    {id: "mop", value: "mop", valueType: "StringParam", type: "simple"},
    {id: "dname", value: "dname", valueType: "StringParam", type: "simple"},
    {id: "acap", value: "acap", valueType: "StringParam", type: "simple"},
    {id: "geoco", value: "geoco", valueType: "StringParam", type: "simple"},
    {id: "geoci", value: "geoci", valueType: "StringParam", type: "simple"},
    {id: "esfs", value: "esfs", valueType: "IntParam", type: "simple"},
    {id: "ess", value: "ess", valueType: "IntParam", type: "simple"},
    {id: "isfs", value: "isfs", valueType: "IntParam", type: "simple"},
    {id: "iss", value: "iss", valueType: "IntParam", type: "simple"},
    {id: "dvolr", value: "dvolr", valueType: "IntParam", type: "simple"},
    {id: "dvolm", value: "dvolm", valueType: "IntParam", type: "simple"},
    {id: "dvola", value: "dvola", valueType: "IntParam", type: "simple"},
    {id: "dvoln", value: "dvoln", valueType: "IntParam", type: "simple"},
    {id: "dvolc", value: "dvolc", valueType: "IntParam", type: "simple"},
    {id: "duse", value: "duse", valueType: "BoolParam", type: "simple"},
    {id: "deflun", value: "deflun", valueType: "StringParam", type: "simple"},
    {id: "earcon", value: "earcon", valueType: "BoolParam", type: "simple"},
    {id: "dchar", value: "dchar", valueType: "BoolParam", type: "simple"},
    {id: "dmstat", value: "dmstat", valueType: "DmStat", type: "complex"},
    {id: "caact", value: "caact", valueType: "BoolParam", type: "simple"},
    {id: "phad", value: "phad", valueType: "StringToIntParam", type: "simple"},
    {id: "isfp", value: "isfp", valueType: "IntParam", type: "simple"},
    {id: "esfp", value: "esfp", valueType: "IntParam", type: "simple"},
    {id: "bact", value: "bact", valueType: "BoolParam", type: "simple"},
    {id: "wfct", value: "wfct", valueType: "BoolParam", type: "simple"},
    {id: "scror", value: "scror", valueType: "StringParam", type: "simple"},
    {id: "tzone", value: "tzone", valueType: "StringParam", type: "simple"},
  ],
  ruleTypes: [
    {id: "param", value: "Simple param"},
    {id: "complex_param", value: "Complex param"},
    {id: "app_action", value: "App Action"},
    {id: "app_category", value: "App Category"},
    {id: "old_vs_new", value: "Old vs new"},
    {id: "old", value: "Old value"},
    {id: "hour_between", value: "Between hours"},
    {id: "last_moments", value: "Last moments"},
    {id: "moment_timing", value: "Moment timing"},
    {id: "compare_params", value: "Compare params"},
  ],
  momentNames: [
    {id: "uahm", value: "Arriving home"},
    {id: "uawk", value: "Arriving work"},
    {id: "ubft", value: "Breakfast time"},
    {id: "ubrd", value: "User is abroad"},
    {id: "udlp", value: "Experiencing slow performance"},
    {id: "udtm", value: "Dinner time"},
    {id: "ueis", value: "Exercising"},
    {id: "ugts", value: "Going to sleep"},
    {id: "uhme", value: "User in his Home"},
    {id: "uiiv", value: "Book a vacation"},
    {id: "ulfd", value: "Meet new people"},
    {id: "ulhm", value: "Leaving home"},
    {id: "ullt", value: "Lunch time"},
    {id: "ultm", value: "Listen to music"},
    {id: "ulwk", value: "Leaving work"},
    {id: "unat", value: "Order taxi"},
    {id: "undv", value: "Driving"},
    {id: "untr", value: "Using public transportation"},
    {id: "upag", value: "Playing a game"},
    {id: "usol", value: "Shopping"},
    {id: "utap", value: "Taking a photo"},
    {id: "utpb", value: "Wants to play Board games"},
    {id: "uwam", value: "Watching a movie"},
    {id: "uwrk", value: "User in his Work place"},
    {id: "uwte", value: "Ordering food"},
    {id: "uwup", value: "Waking Up"},
  ],
  operators: [
    {id: "=", value: "="},
    {id: "!=", value: "!="},
    {id: ">", value: ">"},
    {id: ">=", value: ">="},
    {id: "<", value: "<"},
    {id: "<=", value: "<="},
    {id: "in", value: "in"},
    {id: "not in", value: "not in"},
    {id: "intersects", value: "intersects"},
    {id: "not intersects", value: "not intersects"},
    {id: "contains", value: "contains"},
    {id: "not contains", value: "not contains"},
  ],
  mappingPossibleValues: [
    {id: 10001, value: "Books & Reference", type: "appToCategory"},
    {id: 10002, value: "Game Puzzle", type: "appToCategory"},
    {id: 10003, value: "Tools", type: "appToCategory"},
    {id: 10004, value: "Entertainment", type: "appToCategory"},
    {id: 10005, value: "Personalization", type: "appToCategory"},
    {id: 10006, value: "Business", type: "appToCategory"},
    {id: 10007, value: "Education", type: "appToCategory"},
    {id: 10008, value: "Productivity", type: "appToCategory"},
    {id: 10009, value: "Game Strategy", type: "appToCategory"},
    {id: 10010, value: "Music & Audio", type: "appToCategory"},
    {id: 10011, value: "Maps & Navigation", type: "appToCategory"},
    {id: 10012, value: "Lifestyle", type: "appToCategory"},
    {id: 10013, value: "Finance", type: "appToCategory"},
    {id: 10014, value: "Sports", type: "appToCategory"},
    {id: 10015, value: "Game Adventure", type: "appToCategory"},
    {id: 10016, value: "Game Educational", type: "appToCategory"},
    {id: 10017, value: "Game Racing", type: "appToCategory"},
    {id: 10018, value: "Game Casual", type: "appToCategory"},
    {id: 10019, value: "Game Board", type: "appToCategory"},
    {id: 10020, value: "Game Arcade", type: "appToCategory"},
    {id: 10021, value: "Video Players", type: "appToCategory"},
    {id: 10022, value: "Communication", type: "appToCategory"},
    {id: 10023, value: "Game Card", type: "appToCategory"},
    {id: 10024, value: "Social", type: "appToCategory"},
    {id: 10025, value: "Travel & Local", type: "appToCategory"},
    {id: 10026, value: "Health & Fitness", type: "appToCategory"},
    {id: 10027, value: "Family Education", type: "appToCategory"},
    {id: 10028, value: "Photography", type: "appToCategory"},
    {id: 10029, value: "Medical", type: "appToCategory"},
    {id: 10030, value: "Dating", type: "appToCategory"},
    {id: 10031, value: "Food & Drink", type: "appToCategory"},
    {id: 10032, value: "Game Trivia", type: "appToCategory"},
    {id: 10033, value: "News & Magazines", type: "appToCategory"},
    {id: 10034, value: "Shopping", type: "appToCategory"},
    {id: 10035, value: "Game Casino", type: "appToCategory"},
    {id: 10036, value: "House & Home", type: "appToCategory"},
    {id: 10037, value: "Libraries & Demo", type: "appToCategory"},
    {id: 10038, value: "Weather", type: "appToCategory"},
    {id: 10039, value: "Family Braingames", type: "appToCategory"},
    {id: 10040, value: "Game Word", type: "appToCategory"},
    {id: 10041, value: "Events", type: "appToCategory"},
    {id: 10042, value: "Art & Design", type: "appToCategory"},
    {id: 10043, value: "Game Simulation", type: "appToCategory"},
    {id: 10044, value: "Parenting", type: "appToCategory"},
    {id: 10045, value: "Auto & Vehicles", type: "appToCategory"},
    {id: 10046, value: "Game Action", type: "appToCategory"},
    {id: 10047, value: "Game Sports", type: "appToCategory"},
    {id: 10048, value: "Family Pretend", type: "appToCategory"},
    {id: 10049, value: "Family Action", type: "appToCategory"},
    {id: 10050, value: "Comics", type: "appToCategory"},
    {id: 10051, value: "Beauty", type: "appToCategory"},
    {id: 10052, value: "Game Music", type: "appToCategory"},
    {id: 10053, value: "Game Role Playing", type: "appToCategory"},
    {id: 10054, value: "Family Create", type: "appToCategory"},
    {id: 10055, value: "Family Musicvideo", type: "appToCategory"},
    {id: 10056, value: "Video Players & Editors", type: "appToCategory"},
    {id: "sabh", value: "Book Hotels", type: "appToActions"},
    {id: "sabv", value: "Book Flights", type: "appToActions"},
    {id: "saei", value: "Edit an Image", type: "appToActions"},
    {id: "safpe", value: "Restaurants", type: "appToActions"},
    {id: "salmu", value: "Listen to Music", type: "appToActions"},
    {id: "samnp", value: "Meet people", type: "appToActions"},
    {id: "sand", value: "Navigate", type: "appToActions"},
    {id: "saof", value: "Order Food", type: "appToActions"},
    {id: "saop", value: "Optimize Phone", type: "appToActions"},
    {id: "saot", value: "Order a Taxi", type: "appToActions"},
    {id: "sapad", value: "Adventure games", type: "appToActions"},
    {id: "sapag", value: "Arcade games", type: "appToActions"},
    {id: "sapat", value: "Action games", type: "appToActions"},
    {id: "sapbg", value: "Board Games", type: "appToActions"},
    {id: "sapca", value: "Casual games", type: "appToActions"},
    {id: "sapcg", value: "Casino games", type: "appToActions"},
    {id: "sapcr", value: "Card games", type: "appToActions"},
    {id: "sapeg", value: "Educational games", type: "appToActions"},
    {id: "sapmg", value: "Music games", type: "appToActions"},
    {id: "sappg", value: "Puzzle games", type: "appToActions"},
    {id: "saprg", value: "Racing games", type: "appToActions"},
    {id: "saprp", value: "RPG games", type: "appToActions"},
    {id: "sapsg", value: "Sports games", type: "appToActions"},
    {id: "sapsp", value: "Simulation games", type: "appToActions"},
    {id: "sapst", value: "Strategy games", type: "appToActions"},
    {id: "sapt", value: "Transportation", type: "appToActions"},
    {id: "saptg", value: "Trivia games", type: "appToActions"},
    {id: "sapwg", value: "Words games", type: "appToActions"},
    {id: "saso", value: "Shopping", type: "appToActions"},
    {id: "sastr", value: "Exercise", type: "appToActions"},
    {id: "sawmo", value: "Watch a Movie", type: "appToActions"},
    {id: "spag", value: "Play a game", type: "appToActions"},
  ],
  fields: [
    {id: 1, name: "wfcn", value: "connected"},
    {id: 2, name: "wfcn", value: "name"},
    {id: 3, name: "reapc", value: "category"},
    {id: 4, name: "reapc", value: "appcount"},
    {id: 5, name: "dmstat", value: "value"},
    {id: 6, name: "dmstat", value: "accuracy"},
    {id: 7, name: "wpul", value: "wpxt"},
  ],
  actionTypes: [
    {id: "instant", value: "instant",},
    {id: "delay", value: "delay"}
  ],
  valueTypes: [
    {id: "string", value: "string"},
    {id: "boolean", value: "boolean"},
    {id: "number", value: "number"},
    {id: "field", value: "field"},
  ],
  valueTypesForSubrules: [
    {id: "value", value: "value"},
    {id: "field", value: "field"},
  ],
  mappingNames: [
    {id: "appToActions", value: "appToActions"},
    {id: "appToCategory", value: "appToCategory"},
  ],
  boolParams: [
    {id: "true", value: true},
    {id: "false", value: false}
  ],
  actionList: [
    {id: "create", value: "create"},
    {id: "remove", value: "remove"},
    {id: "cancel", value: "cancel"},
  ],
  actionExpireTypes: [
    {id: "expired_in", value: "expired in",},
    {id: "expired_at", value: "expired at"}
  ],
};


const store = configureStoreForTest(state);

const muiTheme = getMuiTheme();
const mountWithContext = (node) => mount(node, {
  context: {muiTheme},
  childContextTypes: {muiTheme: PropTypes.object},
});



describe('Dashboard', () => {

  it('should render only active events ', () => {

    const wrapper = mountWithContext(
      <Router>
        <EventTablePage events={state.events} actions={state.actions} ruletypes={state.ruleTypes}
                        momentNames={state.momentNames}/>
      </Router>
    );

    expect(wrapper.find(EventTableRow).length).toBe(11);
  });

  it('should render all events after click on button', () => {
    const wrapper = shallow(
      <EventTablePage events={state.events} actions={state.actions} ruletypes={state.ruleTypes}
                      momentNames={state.momentNames} />,
      {
        context: {muiTheme},
        childContextTypes: {muiTheme: PropTypes.object},
      }
    );

    const btn = wrapper.find(RaisedButton).at(1);
    btn.simulate('click');
    expect(wrapper.find(EventTableRow).length).toBe(12);
  });

  it('should filter by moment', () => {
    const wrapper = shallow(
      <EventTablePage events={state.events} actions={state.actions} ruletypes={state.ruleTypes}
                      momentNames={state.momentNames} />,
      {
        context: {muiTheme},
        childContextTypes: {muiTheme: PropTypes.object},
      }
    );

    wrapper.find(SelectField).props().onChange(null, null, "ultm");
    expect(wrapper.state().events.length).toBe(1);
  })

  it('should unsuccefull filter by moment', () => {
    const wrapper = shallow(
      <EventTablePage events={state.events} actions={state.actions} ruletypes={state.ruleTypes}
                      momentNames={state.momentNames} />,
      {
        context: {muiTheme},
        childContextTypes: {muiTheme: PropTypes.object},
      }
    );

    wrapper.find(SelectField).props().onChange(null, null, "upag");
    expect(wrapper.state().events.length).toBe(0);
  })

});