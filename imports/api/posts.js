import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Posts = new Mongo.Collection('posts');

if (Meteor.isServer) {
    Meteor.publish('posts', () => Posts.find({}));
}

Meteor.methods({
    'posts.insert'(title, text, username) {
        check(title, String);
        check(text, String);
        check(username, String);

        Posts.insert({
            title,
            text,
            username,
            createdAt: new Date()
        });
    },
    'posts.remove'(postId) {
        check(postId, String);
        // const post = Posts.findOne(postId);
        Posts.remove(postId);
    },
    'posts.like'(postId) {
        check(postId, String);
        Posts.update({_id: postId}, {$inc: {likes: 1}});
    }
})
