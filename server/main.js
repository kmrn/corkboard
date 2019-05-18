import { Meteor } from 'meteor/meteor';
import Posts from '/imports/api/posts';

function insertPost(title, text, author) {
  Posts.insert({ title, text, author, createdAt: new Date() });
}

Meteor.startup(() => {
  
});
