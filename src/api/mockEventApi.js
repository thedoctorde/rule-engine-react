import {normalize, denormalize, schema} from 'normalizr';
import 'whatwg-fetch';
import {url} from '../config'


const subruleScheme = new schema.Entity('subrules', {
  idAttribute: 'id'
});

const ruleScheme = new schema.Entity('rules', {
  rules: [subruleScheme]
});

const eventScheme = new schema.Entity('events', {
  idAttribute: 'id',
  ruleset: [ruleScheme]
});

const eventsSchema = [eventScheme];


const generateId = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let
      r = Math.random() * 16 | 0,
      v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};



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

  static saveRule(obj) {
    var rule = Object.assign({}, obj); // to avoid manipulating object passed in.
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
    let updated = denormalizedData.filter(x => x.id === eventId)[0];
    return fetch(url+'/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updated)
    })
  }

  static createEvent() {
    return new Promise((resolve, reject) => {
        let event = {
          id: generateId()
        };

        resolve({event});
      }
    );
  }

  static createSubrule(ruleId) {
    return new Promise((resolve, reject) => {
        let subrule = {
          id: generateId()
        };
        let rule = {
          id: ruleId
        };

        resolve({subrule, rule});
      }
    );
  }

  static deleteSubrule(id, ruleId) {
    return new Promise((resolve) => {
      resolve({id, ruleId})
    });
  }

  static saveSubrule(obj) {
    var subrule = Object.assign({}, obj); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      if (subrule) {
      } else {
        subrule = {
          id: generateId()
        };
      }
      resolve(subrule);
    });
  }
}

export default EventsApi;
