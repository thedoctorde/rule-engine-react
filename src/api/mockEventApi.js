import {normalize, schema} from 'normalizr';


const subrule = new schema.Entity('subrules', {
  idAttribute: 'id'
});

const rule = new schema.Entity('rules', {
  subrules: [subrule]
});

const ruleset = new schema.Entity('rulesets', {
  idAttribute: 'id',
  rules: [rule]
});

const event = new schema.Entity('events', {
  idAttribute: 'id',
  rulesets: [ruleset]
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
          rulesets: [
            {//ruleset
              id: "1",
              rules: [
                {//rule
                  id: "1",
                  type: "hour_between",
                  min: 9,
                  max: 13
                },
                {
                  id: 2,
                  type: "hour_between",
                  min: 9,
                  max: 13
                },
              ]
            },
            {
              id: "2",
              rules: [
                {
                  id: "1",
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
                    }
                  ]
                }]
            },
          ],
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
  };
//const normalizedData = normalize(eventsData, responseSchema);

class EventsApi {
  static getAllEvents() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], normalize(eventsData, responseSchema)));
      }, 0);
    });
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
