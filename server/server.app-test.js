import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';

import { Messages } from '../imports/api/messages.js';
import './main.js';

if (Meteor.isServer) {
  describe('Messages', () => {
    const userId = Random.id();
    let messageId;

    beforeEach(() => {
      Messages.remove({});
      messageId = Messages.insert({
        username: 'theUser',
        messageText: 'test message',
        createdAt: new Date(),
        owner: userId,
      });
      it('can delete owned task', () => {
        // Find the internal implementation of the task method so we can
        // test it in isolation
        const deleteMessage = Meteor.server.method_handlers['remove'];

        // Set up a fake method invocation that looks like what the method expects
        const invocation = { userId };

        // Run the method with `this` set to the fake invocation
        deleteTask.apply(invocation, [messageId]);

        // Verify that the method does what we expected
        assert.equal(Tasks.find().count(), 0);

      });
    });
  });
}
