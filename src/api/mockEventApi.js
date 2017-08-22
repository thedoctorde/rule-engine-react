import {normalize, denormalize, schema} from 'normalizr';
import 'whatwg-fetch';
import {url} from '../config'


const subrule = new schema.Entity('subrules', {
  idAttribute: 'id'
});

const rule = new schema.Entity('rules', {
  rules: [subrule]
});

const event = new schema.Entity('events', {
  idAttribute: 'id',
  ruleset: [rule]
});

const eventSchema = event;
const eventsSchema = [event];

const eventsData =
  [
    {
      id: "1",
      name: "a",
      ruleset: [
        {//rule
          id: "1a",
          type: "hour_between",
          min: 9,
          max: 13
        },
        {//rule
          id: "2a",
          type: "hour_between",
          min: 9,
          max: 13
        },
      ]

    },

    {
      id: "2",
      name: "bbb",
      ruleset: [
        {
          id: "3a",
          type: "complex_param",
          name: "wfcn",
          subrules: [
            {
              id: "1",
              field: "connected",
              operator: "=",
              value: true,
              value_type: "boolean"
            },
            {
              id: "2",
              field: "name",
              operator: "=",
              value: "wfho",
              value_type: "field"
            }]
        }
      ]
    },
    {
      id: "2",
      name: "b"
    },
    {
      id: "3",
      name: "c"
    }
  ]
;


const generateId = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let
      r = Math.random() * 16 | 0,
      v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error)
}


class EventsApi {
  static getAllEvents() {
    return fetch(url+'/getEvents')
      .then(res => res.json())
      .then(data => {
        let newdata = data.map(event => {
          if (!event.id) event.id = generateId();
          if (event.ruleset) {
            event.ruleset = event.ruleset.map(rule => {
              if (!rule.id) rule.id = generateId();
              if (rule.rules) {
                rule.rules = rule.rules.map(subrule => {
                  if (!subrule.id) subrule.id = generateId();
                  return subrule
                })
              }
              return rule
            })
          }
          return event;
        });
        let normalizedData = normalize(newdata, eventsSchema);
        return normalizedData;
      })

  }

  static saveRule(rule) {
    rule = Object.assign({}, rule); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      if (rule) {
      } else {
        rule = {
          id: generateId()
        };
      }
      resolve(rule);
    });
  }

  static deleteRule(id, eventId) {
    return new Promise((resolve) => {
      resolve({id, eventId})
    });
  }

  static createRule(eventId) {
    return new Promise((resolve, reject) => {
        let rule = {
          id: generateId()
        };
        let event = {
          id: eventId
        };

        resolve({rule, event});
      }
    );
  }

  static sendEventToServer(eventId, state) {
    let entities = Object.assign({}, {events: state.events}, {rules: state.rules}, {subrules: state.subrules});
    const denormalizedData = denormalize(Object.keys(state.events), eventsSchema, entities);
    let updated = denormalizedData.filter(x => x.id == eventId)[0];
    return fetch(url+'/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updated)
    })
  }
}

export default EventsApi;
