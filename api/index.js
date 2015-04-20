var fs = require('fs');

SupAPI.registerPlugin('typescript', 'Notify ', {
  code: "declare var Notify;",
  defs: fs.readFileSync(__dirname + '/notifyjs.d.ts.txt', {
    encoding: 'utf8'
  })
});