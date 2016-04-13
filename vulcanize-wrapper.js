// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See vulcanize-wrapper-tests.js for an example of importing.
const Vulcanize = require('vulcanize');
export const Vulcan = {
    process: function(target, opt={}){
        var res = Async.runSync((done)=>{
            Vulcanize.setOptions(opt);
            Vulcanize.process(target, (err, html)=>done(err, html));
        })
        return res;
    }
};


