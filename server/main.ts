import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/app/api/links';
import { TasksCollection } from "/app/api/collections/TasksCollection"
function insertLink(title: string, url: string) {
  LinksCollection.insert({ title, url, createdAt: new Date() });
}

const insertTask = (taskText: any) => TasksCollection.insert({ text: taskText } as any );


Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (LinksCollection.find().count() === 0) {
    insertLink(
      'Do the Tutorial',
      'https://www.meteor.com/tutorials/react/creating-an-app'
    );

    insertLink(
      'Follow the Guide',
      'http://guide.meteor.com'
    );

    insertLink(
      'Read the Docs',
      'https://docs.meteor.com'
    );

    insertLink(
      'Discussions',
      'https://forums.meteor.com'
    );
  }

  if (TasksCollection.find().count() === 0) {
    [
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
      'Fifth Task',
      'Sixth Task',
      'Seventh Task'
    ].forEach(insertTask)
  }

});
