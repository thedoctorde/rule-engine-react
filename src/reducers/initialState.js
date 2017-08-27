export default {
  events: [],
  rules: [],
  rulesets: [],
  subrules: [],
  actions: [],
  ruleTypes: [
    {id: 1, value:"hour_between"},
    {id: 2, value:"complex_param"},
    {id: 3, value:"last_moments"},
    {id: 4, value:"param"},
    {id: 5, value:"old_vs_new"},
    {id: 6, value:"mapping"},
    {id: 7, value:"moment_timing"},
    {id: 8, value:"compare_params"},
    {id: 9, value:"old"},
    ],
  momentNames:[
    {id:"uahm", value: "Arriving home"},
    {id:"uawk", value: "Arriving work"},
    {id:"ubft", value:"Breakfast time"},
    {id:"ubrd", value:"User is abroad"},
    {id:"udlp", value:"Experiencing slow performance"},
    {id:"udtm", value:"Dinner time"},
    {id:"ueis", value:"Exercising"},
    {id:"ugts", value:"Going to sleep"},
    {id:"uhme", value:"User in his Home"},
    {id:"uiiv", value:"Book a vacation"},
    {id:"ulfd", value:"Meet new people"},
    {id:"ulhm", value:"Leaving home"},
    {id:"ullt", value:"Lunch time"},
    {id:"ultm", value:"Listen to music"},
    {id:"ulwk", value:"Leaving work"},
    {id:"unat", value:"Order taxi"},
    {id:"undv", value:"Driving"},
    {id:"untr", value:"Using public transportation"},
    {id:"upag", value:"Playing a game"},
    {id:"usol", value:"Shopping"},
    {id:"utap", value:"Taking a photo"},
    {id:"utpb", value:"Wants to play Board games"},
    {id:"uwam", value:"Watching a movie"},
    {id:"uwrk", value:"User in his Work place"},
    {id:"uwte", value:"Ordering food"},
    {id:"uwup", value:"Waking Up"},
  ],
  operators:[
    {id: 1, value:"="},
    {id: 2, value:"!="},
    {id: 3, value:"in"},
    {id: 4, value:"not in"},
    {id: 5, value:"intersects"},
    {id: 6, value:"not intersects"},
  ],
  valueTypes:[
    {id:1, value:"string"},
    {id:2, value:"boolean"},
    {id:3, value:"number"},
    {id:4, value:"field"},
  ],
  paramNames:[
    {id:"inapc", valueType:"Instapcat", type:"complex"},
    {id:"reap", valueType:"Resactap", type:"complex"},
    {id:"reapc", valueType:"Resactapcat", type:"complex"},
    {id:"acapc", valueType:"Acapc", type:"complex"},
    {id:"savloc", valueType:"Savloc", type:"complex"},
    {id:"wpul", valueType:"Wpul", type:"complex"},
    {id:"wfng", valueType:"Wfng", type:"complex"},
    {id:"wfmo", valueType:"Wfmo", type:"complex"},
    {id:"bcon", valueType:"Btconn", type:"complex"},
    {id:"wfcn", valueType:"WifiCon", type:"complex"},
    {id:"wfpx", valueType:"WifiProxy", type:"complex"},
    {id:"glod", valueType:"IntParam", type:"simple"},
    {id:"inslun", valueType:"StringToIntParam", type:"simple"},
    {id:"foreapp", valueType:"StringParam", type:"simple"},
    {id:"scron", valueType:"BoolParam", type:"simple"},
    {id:"ulve", valueType:"StringParam", type:"simple"},
    {id:"usloc", valueType:"StringToIntParam", type:"simple"},
    {id:"dos", valueType:"StringParam", type:"simple"},
    {id:"dmod", valueType:"StringParam", type:"simple"},
    {id:"slang", valueType:"StringParam", type:"simple"},
    {id:"ctype", valueType:"StringParam", type:"simple"},
    {id:"mctype", valueType:"StringParam", type:"simple"},
    {id:"mop", valueType:"StringParam", type:"simple"},
    {id:"dname", valueType:"StringParam", type:"simple"},
    {id:"acap", valueType:"StringParam", type:"simple"},
    {id:"geoco", valueType:"StringParam", type:"simple"},
    {id:"geoci", valueType:"StringParam", type:"simple"},
    {id:"esfs", valueType:"IntParam", type:"simple"},
    {id:"ess", valueType:"IntParam", type:"simple"},
    {id:"isfs", valueType:"IntParam", type:"simple"},
    {id:"iss", valueType:"IntParam", type:"simple"},
    {id:"dvolr", valueType:"IntParam", type:"simple"},
    {id:"dvolm", valueType:"IntParam", type:"simple"},
    {id:"dvola", valueType:"IntParam", type:"simple"},
    {id:"dvoln", valueType:"IntParam", type:"simple"},
    {id:"dvolc", valueType:"IntParam", type:"simple"},
    {id:"duse", valueType:"BoolParam", type:"simple"},
    {id:"deflun", valueType:"StringParam", type:"simple"},
    {id:"earcon", valueType:"BoolParam", type:"simple"},
    {id:"dchar", valueType:"BoolParam", type:"simple"},
    {id:"dmstat", valueType:"DmStat", type:"simple"},
    {id:"caact", valueType:"BoolParam", type:"simple"},
    {id:"phad", valueType:"StringToIntParam", type:"simple"},
    {id:"isfp", valueType:"IntParam", type:"simple"},
    {id:"esfp", valueType:"IntParam", type:"simple"},
    {id:"bact", valueType:"BoolParam", type:"simple"},
    {id:"wfct", valueType:"BoolParam", type:"simple"},
    {id:"scror", valueType:"StringParam", type:"simple"},
    {id:"tzone", valueType:"StringParam", type:"simple"},
  ],
  mappingNames:[
    {id:"appToActions", value:"appToActions"},
    {id:"appToCategory", value:"appToCategory"},
  ],
  mappingPossibleValues:[
    {id:10001, value: "Books & Reference", type:"appToCategory"},
    {id:10002 , value:"Game Puzzle", type:"appToCategory"},
    {id:10003, value:"Tools", type:"appToCategory"},
    {id:10004, value:"Entertainment", type:"appToCategory"},
    {id:10005, value:"Personalization", type:"appToCategory"},
    {id:10006, value:"Business", type:"appToCategory"},
    {id:10007, value:"Education", type:"appToCategory"},
    {id:10008, value:"Productivity", type:"appToCategory"},
    {id:10009, value:"Game Strategy", type:"appToCategory"},
    {id:10010, value:"Music & Audio", type:"appToCategory"},
    {id:10011, value:"Maps & Navigation", type:"appToCategory"},
    {id:10012, value:"Lifestyle", type:"appToCategory"},
    {id:10013, value:"Finance", type:"appToCategory"},
    {id:10014, value:"Sports", type:"appToCategory"},
    {id:10015, value:"Game Adventure", type:"appToCategory"},
    {id:10016, value:"Game Educational", type:"appToCategory"},
    {id:10017, value:"Game Racing", type:"appToCategory"},
    {id:10018, value:"Game Casual", type:"appToCategory"},
    {id:10019, value:"Game Board", type:"appToCategory"},
    {id:10020, value:"Game Arcade", type:"appToCategory"},
    {id:10021, value:"Video Players", type:"appToCategory"},
    {id:10022, value:"Communication", type:"appToCategory"},
    {id:10023, value:"Game Card", type:"appToCategory"},
    {id:10024, value:"Social", type:"appToCategory"},
    {id:10025, value:"Travel & Local", type:"appToCategory"},
    {id:10026, value:"Health & Fitness", type:"appToCategory"},
    {id:10027, value:"Family Education", type:"appToCategory"},
    {id:10028, value:"Photography", type:"appToCategory"},
    {id:10029, value:"Medical", type:"appToCategory"},
    {id:10030, value:"Dating", type:"appToCategory"},
    {id:10031, value:"Food & Drink", type:"appToCategory"},
    {id:10032, value:"Game Trivia", type:"appToCategory"},
    {id:10033, value:"News & Magazines", type:"appToCategory"},
    {id:10034, value:"Shopping", type:"appToCategory"},
    {id:10035, value:"Game Casino", type:"appToCategory"},
    {id:10036, value:"House & Home", type:"appToCategory"},
    {id:10037, value:"Libraries & Demo", type:"appToCategory"},
    {id:10038, value:"Weather", type:"appToCategory"},
    {id:10039, value:"Family Braingames", type:"appToCategory"},
    {id:10040, value:"Game Word", type:"appToCategory"},
    {id:10041, value:"Events", type:"appToCategory"},
    {id:10042, value:"Art & Design", type:"appToCategory"},
    {id:10043, value:"Game Simulation", type:"appToCategory"},
    {id:10044, value:"Parenting", type:"appToCategory"},
    {id:10045, value:"Auto & Vehicles", type:"appToCategory"},
    {id:10046, value:"Game Action", type:"appToCategory"},
    {id:10047, value:"Game Sports", type:"appToCategory"},
    {id:10048, value:"Family Pretend", type:"appToCategory"},
    {id:10049, value:"Family Action", type:"appToCategory"},
    {id:10050, value:"Comics", type:"appToCategory"},
    {id:10051, value:"Beauty", type:"appToCategory"},
    {id:10052, value:"Game Music", type:"appToCategory"},
    {id:10053, value:"Game Role Playing", type:"appToCategory"},
    {id:10054, value:"Family Create", type:"appToCategory"},
    {id:10055, value:"Family Musicvideo", type:"appToCategory"},
    {id:10056, value:"Video Players & Editors", type:"appToCategory"},
    {id:"sabh", value:"Book Hotels", type:"appToActions"},
    {id:"sabv", value:"Book Flights", type:"appToActions"},
    {id:"saei", value:"Edit an Image", type:"appToActions"},
    {id:"safpe", value:"Restaurants", type:"appToActions"},
    {id:"salmu", value:"Listen to Music", type:"appToActions"},
    {id:"samnp", value:"Meet people", type:"appToActions"},
    {id:"sand", value:"Navigate", type:"appToActions"},
    {id:"saof", value:"Order Food", type:"appToActions"},
    {id:"saop", value:"Optimize Phone", type:"appToActions"},
    {id:"saot", value:"Order a Taxi", type:"appToActions"},
    {id:"sapad", value:"Adventure games", type:"appToActions"},
    {id:"sapag", value:"Arcade games", type:"appToActions"},
    {id:"sapat", value:"Action games", type:"appToActions"},
    {id:"sapbg", value:"Board Games", type:"appToActions"},
    {id:"sapca", value:"Casual games", type:"appToActions"},
    {id:"sapcg", value:"Casino games", type:"appToActions"},
    {id:"sapcr", value:"Card games", type:"appToActions"},
    {id:"sapeg", value:"Educational games", type:"appToActions"},
    {id:"sapmg", value:"Music games", type:"appToActions"},
    {id:"sappg", value:"Puzzle games", type:"appToActions"},
    {id:"saprg", value:"Racing games", type:"appToActions"},
    {id:"saprp", value:"RPG games", type:"appToActions"},
    {id:"sapsg", value:"Sports games", type:"appToActions"},
    {id:"sapsp", value:"Simulation games", type:"appToActions"},
    {id:"sapst", value:"Strategy games", type:"appToActions"},
    {id:"sapt", value:"Transportation", type:"appToActions"},
    {id:"saptg", value:"Trivia games", type:"appToActions"},
    {id:"sapwg", value:"Words games", type:"appToActions"},
    {id:"saso", value:"Shopping", type:"appToActions"},
    {id:"sastr", value:"Exercise", type:"appToActions"},
    {id:"sawmo", value:"Watch a Movie", type:"appToActions"},
    {id:"spag", value:"Play a game", type:"appToActions"},
  ],
  fields:[
    {id: 1, name: "wfcn", value:"connected"},
    {id: 2, name: "wfcn", value:"name"},
  ],
  boolParams:[
    {id:"true", value: true},
    {id:"false", value: false}
  ],
  actionList:[
    {id:"create", value:"create"},
    {id:"remove", value:"remove"},
  ],
  actionTypes:[
    {id:"instant", value:"instant", },
    {id:"delay", value:"delay"}
  ],
  actionExpireTypes:[
    {id:"elapsed_time", value:"elapsed_time", },
    {id:"at", value:"at"}
  ],

};
