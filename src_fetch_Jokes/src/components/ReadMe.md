### Given some data that looks like this
const taskData = [
    { task: 'Clean the bathroom', priority: 'low' },
    { task: 'Walk the dog', priority: 'high' },
    { task: 'Do codewars', priority: 'very high' },
    { task: 'Cook dinner', priority: 'medium' },
];
### MVP:
Create a List of components called <TaskCard \>
Each card should render the task, and the priority
There should be a button on each card which deletes it
State will need to be maintained in some kind of parent component
### BONUS:
Create a form for creating new tasks
Create a button to sort tasks in order of priority, the button should toggle from ascending to descending
### Extra BONUS:
Create a search bar for the tasks as well