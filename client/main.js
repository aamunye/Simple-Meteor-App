import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Messages } from '../imports/api/messages.js';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
  messages() {

    return Messages.find();
  },
});

Template.hello.events({
  'click .delete'() {
    console.log(this._id);
    Meteor.call('messages.remove', this._id);
  },
});

Template.body.helpers({
});
