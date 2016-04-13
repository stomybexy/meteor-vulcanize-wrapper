// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by vulcanize-wrapper.js.
import { name as packageName } from "meteor/jonatan:vulcanize-wrapper";

// Write your tests here!
// Here is an example.
Tinytest.add('vulcanize-wrapper - example', function (test) {
  test.equal(packageName, "vulcanize-wrapper");
});
