export default {
  events: [],
  rules: [],
  rulesets: [],
  subrules: [],
  ruleTypes: [
    {id: 1, value:"hour_between"},
    {id: 2, value:"complex_param"},
    {id: 3, value:"last_moments"},
    {id: 4, value:"param"},
    {id: 5, value:"old_vs_new"},
    {id: 6, value:"mapping"},
    ],
  momentNames:[
    {id: 1, value:"uwup"}
  ],
  operators:[
    {id: 1, value:"="},
    {id: 2, value:"!="},
    {id: 3, value:"in"},
    {id: 4, value:"not in"},
  ],
  valueTypes:[
    {id:1, value:"string"},
    {id:2, value:"bool"},
    {id:3, value:"number"}
  ],
  paramNames:[
    {id:1, value:"earcon"},
    {id:2, value:"geoco"},
  ],
  mappingNames:[
    {id:1, value:"app2action"},
  ],
  mappingPossibleValues:[
    {id:1, value:1},
    {id:2, value:2}
  ],
  nameToFields:[
    {id: 1, name: "wfcn", field:"connected"},
    {id: 2, name: "wfcn", field:"name"},
  ]
};
