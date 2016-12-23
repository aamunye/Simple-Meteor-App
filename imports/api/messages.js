import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Messages = new Mongo.Collection('messages');

Meteor.methods({
  'messages.remove'(messageId) {
    console.log('abcdef');
    //check(messageId, Object);

    //const message = Messages.findOne(messageId);

    Messages.remove(messageId);
  },
});
