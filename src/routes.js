console.log('routes.js admin poc');

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

const routes = [
  {
    name: 'child1',
    path: 'child1',
    getComponent(nextState, cb) {
      import('./index')
        .then(loadModule(cb))
        .catch(errorLoading);
    },
  }
];

export default routes;