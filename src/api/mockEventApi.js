import {normalize, schema} from 'normalizr';


const subrule = new schema.Entity('subrules', {
  idAttribute: 'id'
});

const rule = new schema.Entity('rules', {
  subrules: [subrule]
});


const event = new schema.Entity('events', {
  idAttribute: 'id',
  ruleset: [rule]
});

const responseSchema = new schema.Entity('response', {
  events: [event]
});


const eventsData =
  {
    events:
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
  }
;

let data = normalize(eventsData, responseSchema);

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
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], data));
      }, 0);
    });
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

// static saveCourse(course) {
//   course = Object.assign({}, course); // to avoid manipulating object passed in.
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // Simulate server-side validation
//       const minCourseTitleLength = 1;
//       if (course.title.length < minCourseTitleLength) {
//         reject(`Title must be at least ${minCourseTitleLength} characters.`);
//       }
//
//       if (course.id) {
//         const existingCourseIndex = courses.findIndex(a => a.id == course.id);
//         courses.splice(existingCourseIndex, 1, course);
//       } else {
//         //Just simulating creation here.
//         //The server would generate ids and watchHref's for new courses in a real app.
//         //Cloning so copy returned is passed by value rather than by reference.
//         course.id = generateId(course);
//         course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
//         courses.push(course);
//       }
//
//       resolve(course);
//     }, delay);
//   });
// }
//
// static deleteCourse(courseId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const indexOfCourseToDelete = courses.findIndex(course => {
//         return course.courseId == courseId;
//       });
//       courses.splice(indexOfCourseToDelete, 1);
//       resolve();
//     }, delay);
//   });
// }
}

export default EventsApi;
