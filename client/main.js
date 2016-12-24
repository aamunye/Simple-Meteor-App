import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Messages } from '../imports/api/messages.js';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
  messages() {
    return Messages.find({}, { sort: { createdAt: 1 } });
  },
});

Template.hello.events({
  'click .delete'() {
    Meteor.call('remove', this._id);
  },

  'submit .new-message'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;

    if(!text){
      //Nothing entered; do nothing
      return;
    }

    // Insert a message into the collection
    Messages.insert({
      username: 'theUser',
      messageText: text,
      createdAt: new Date(),
    });

    // Clear form
    target.text.value = '';
  },
});

Template.body.helpers({
});
