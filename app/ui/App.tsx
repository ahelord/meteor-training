import React from 'react';
/*import { Hello } from './Hello';
import { Info } from './Info';*/
import Task from "/app/ui/components/Task";
import { useTracker } from 'meteor/react-meteor-data';
import { TasksCollection } from '/app/api/collections/TasksCollection';
import {TaskForm} from "/app/ui/components/TaskForm";
import Routes from "/app/ui/Routes";



export const App = () => {
    const tasks = useTracker(() => TasksCollection.find({}
    ,{sort:{createdAt: -1}}).fetch());

    return (
      <div>
          <h1>Welcome to Meteor!</h1>
          <TaskForm/>
          <ul>

             {/* @ts-ignore*/}
              {tasks.map(task => <Task key={task._id} task={task}/>)}

          </ul>
          {/*    <Hello />
    <Info />*/}
          <Routes/>
      </div>
      )

}
