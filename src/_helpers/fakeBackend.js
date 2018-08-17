let users = JSON.parse(localStorage.getItem("users")) || [];
let dailyTasks = [
  {
    date: "2018-08-07",
    tasks: [
      {
        id: 123,
        title: "Default task which you do every noon",
        priority: 2,
        project: "Project",
        category: "Category",
        comment: "This is comment",
        date: "2018-08-07",
        state: true
      },
      {
        id: 124,
        title: "Default task which you do every enening",
        priority: 0,
        project: "Project2",
        category: "Category",
        comment: "This is a little bit longer comment",
        date: "2018-08-07",
        state: true
      }
    ]
  },
  {
    date: "2018-08-06",
    tasks: [
      {
        id: 123,
        title: "Default task which you do every noon",
        priority: 2,
        project: "Project",
        category: "Category",
        comment: "This is comment",
        date: "2018-08-06",
        state: true
      },
      {
        id: 124,
        title: "Default task which you do every enening",
        priority: 0,
        project: "Project2",
        category: "Category",
        comment: "This is a little bit longer comment",
        date: "2018-08-06",
        state: true
      }
    ]
  },
  {
    date: "2018-08-05",
    tasks: [
      {
        id: 125,
        title: "Default task which you do every morning",
        priority: 1,
        project: "Project",
        category: "Category",
        comment: "This is comment",
        date: "2018-08-05",
        state: true
      }
    ]
  },
  {
    date: "2018-08-04",
    tasks: [
      {
        id: 126,
        title: "Default task 1",
        priority: 1,
        project: "Project",
        category: "Category",
        comment: "This is comment",
        date: "2018-08-04",
        state: true
      },
      {
        id: 122,
        title: "Default task for Friday",
        priority: 0,
        project: "Project 3",
        category: "Bike riding",
        comment: "This is comment unvisible",
        date: "2018-08-04",
        state: true
      }
    ]
  }
];

export function configureFakeBackend() {
  let realFetch = window.fetch;
  window.fetch = function(url, opts) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url.endsWith("/api/users/authenticate") && opts.method === "POST") {
          let params = JSON.parse(opts.body);

          let filteredUsers = users.filter(user => {
            return (
              user.email === params.email && user.password === params.password
            );
          });

          if (filteredUsers.length) {
            let user = filteredUsers[0];
            let responseJson = {
              id: user.id,
              email: user.email,
              password: user.password,
              agreement: user.agreement,
              token: "fake-jwt-token"
            };
            resolve({
              ok: true,
              text: () => Promise.resolve(JSON.stringify(responseJson))
            });
          } else {
            reject("User name or password incorrect");
          }

          return;
        }

        if (url.endsWith("/users") && opts.method === "GET") {
          if (
            opts.headers &&
            opts.headers.Authorization === "Bearer fake-jwt-token"
          ) {
            resolve({
              ok: true,
              text: () => Promise.resolve(JSON.stringify(users))
            });
          } else {
            reject("Unauthorised");
          }

          return;
        }

        if (url.match(/\/api\/users\/\d+$/) && opts.method === "GET") {
          if (
            opts.headers &&
            opts.headers.Authorization === "Bearer fake-jwt-token"
          ) {
            let urlParts = url.split("/");
            let id = parseInt(urlParts[urlParts.length - 1], 10);
            let matchedUsers = users.filter(user => {
              return user.id === id;
            });
            let user = matchedUsers.length ? matchedUsers[0] : null;

            resolve({ ok: true, text: () => JSON.stringify(user) });
          } else {
            reject("Unauthorised");
          }

          return;
        }

        if (url.endsWith("/api/users/register") && opts.method === "POST") {
          let newUser = JSON.parse(opts.body);

          let duplicatedUser = users.filter(user => {
            return user.email === newUser.email;
          }).length;
          if (duplicatedUser) {
            reject("Given email address is already in use.");
            return;
          }

          newUser.id = users.length
            ? Math.max(...users.map(user => user.id)) + 1
            : 1;
          users.push(newUser);
          localStorage.setItem("users", JSON.stringify(users));

          resolve({ ok: true, text: () => Promise.resolve() });

          return;
        }

        if (url.match(/\/api\/users\/\d+$/) && opts.method === "DELETE") {
          if (
            opts.headers &&
            opts.headers.Authorization === "Bearer fake-jwt-token"
          ) {
            let urlParts = url.split("/");
            let id = parseInt(urlParts[urlParts.length - 1], 10);
            for (var i = 0; i < users.length; i++) {
              let user = users[i];
              if (user.id === id) {
                users.splice(i, 1);
                localStorage.setItem("users", JSON.parse(users));
                break;
              }
            }

            resolve({ ok: true, text: () => Promise.resolve() });
          } else {
            reject("Unauthorised");
          }

          return;
        }

        if (url.endsWith("/api/tasks/daily") && opts.method === "GET") {
          if (
            opts.headers &&
            opts.headers.Authorization === "Bearer fake-jwt-token"
          ) {
            let responseJson = {
              token: "fake-jwt-token",
              tasks: dailyTasks
            };

            resolve({
              ok: true,
              text: () => Promise.resolve(JSON.stringify(responseJson))
            });
          }
        }

        realFetch(url, opts).then(response => resolve(response));
      }, 500);
    });
  };
}
