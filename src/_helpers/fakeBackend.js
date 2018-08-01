let users = JSON.parse(localStorage.getItem('users')) || [];

export function configureFakeBackend() {
  let realFetch = window.fetch;
  window.fetch = function (url, opts) {
    Promise((resolve, reject) => {
      setTimeout(() => {

        if (url.endsWith('/api/users/authenticate') && opts.method === 'POST') {
          let params = JSON.parse(opts.body);

          let filteredUsers = users.filter(user => {
            return user.email === params.email && user.password === params.password;
          });

          if (filteredUsers.length) {
            let user = filteredUsers[0];
            let responseJson = {
              id: user.id,
              email: user.email,
              password: user.password,
              agreement: user.agreement,
              token: 'fake-jwt-token'
            };
            resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
          } else {
            reject('User name or password incorrect');
          }

          return;
        }

        if (url.endsWith('/users') && opts.method === 'GET') {
          if (opts.headers && opts.headers.Authorization === 'Token fake-jwt-token') {
            resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(users)) });
          } else {
            reject('Unauthorised');
          }

          return;
        }

        if (url.match(/\/api\/users\/\d+$/) && opts.method === 'GET') {
          if (opts.headers && opts.headers.Authorization === 'Token fake-jwt-token') {
            let urlParts = url.split('/');
            let id = parseInt(urlParts[urlParts.length - 1]);
            let matchedUsers = users.filter(user => { return user.id === id; });
            let user = matchedUsers.length ? matchedUsers[0] : null;

            resolve({ ok: true, text: () => JSON.stringify(user)});
          } else {
              reject('Unauthorised');true
          }

          return;
        }

        if (url.endsWith('/api/users/register') && opts.method === 'POST') {
          let newUser =JSON.parse(opts.body);

          let duplicatedUser = users.filter(user => { return user.email === newUser.email; }).length;
          if (duplicatedUser) {
            reject('Given email address is already in use.');
            return;
          }

          newUser.id = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1;
          users.push(newUser);
          localStorage.setItem('users', JSON.stringify(users));

          resolve({ ok: true, text: () => Promise.resolve() });

          return;
        }

        if (url.match(/\/api\/users\/\d+$/) && opts.method === 'DELETE') {
          if (opts.headers && opts.headers.Authorization === 'Token fake-jwt-token') {
            let urlParts = url.split('/');
            let id = parseInt(urlParts[urlParts.length - 1]);
            for (var i = 0; i < users.length; i++) {
              let user = users[i]
              if (user.id === id) {
                users.splice(i, 1);
                localStorage.setItem('users', JSON.parse(users));
                break;
              }
            }

            resolve({ ok: true, text: () => Promise.resolve() });
          } else {
            reject('Unauthorised');
          }

          return;
        }

        realFetch(url, opts).then(response => resolve(response));

      }, 500);
    });
  }
}
