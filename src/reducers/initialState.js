export default {
  events: [],
  rules: [],
  rulesets: [],
  subrules: [],
  actions: [],
  ruleTypes: window.ruleTypes,

  momentNames: window.momentNames,

  operators: window.operators,

  valueTypes:[
    {id:"string", value:"string"},
    {id:"boolean", value:"boolean"},
    {id:"number", value:"number"},
    {id:"field", value:"field"},
  ],

  valueTypesForSubrules:[
    {id:"value", value:"value"},
    {id:"field", value:"field"},
  ],

  paramNames: window.paramNames,

  mappingNames:[
    {id:"appToActions", value:"appToActions"},
    {id:"appToCategory", value:"appToCategory"},
  ],

  mappingPossibleValues: window.mappingPossibleValues,

  fields: window.fields,

  boolParams:[
    {id:"true", value: true},
    {id:"false", value: false}
  ],

  actionList:[
    {id:"create", value:"create"},
    {id:"remove", value:"remove"},
    {id:"cancel", value:"cancel"},
  ],

  actionTypes: window.actionTypes,

  actionExpireTypes:[
    {id:"expired_in", value:"expired in", },
    {id:"expired_at", value:"expired at"}
  ],

  filterByMoment: "",

};
