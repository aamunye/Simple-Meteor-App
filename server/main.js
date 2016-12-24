import { Meteor } from 'meteor/meteor';
import '../imports/api/messages.js';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

import { Messages } from '../imports/api/messages.js';


Meteor.startup(() => {
  // code to run on server at startup
});


Meteor.methods({
  'remove'(messageId) {
    Messages.remove(messageId);
  },
});
