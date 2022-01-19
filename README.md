# todo_list_js

## About this project

This is the to do list project from The Odin Project's Full Stack Ruby on Rails Javascript Course. This to do list app uses webpack and ES6 modules to bundle Javascript used on the frontend, and uses local storage as a stand in for an actual backend database. The app uses css for styling and responsive layouts.

The functionality of the app itself lets users add items to various to do lists. They can create new project to do lists and add items to those respective lists. They can edit their list items or simply see the full details of the task like level of priority, date due, and description. When a user completes a task they click the green bordered circle. A checkmark appears and the task dissapears.

## Challenges and takeaways

There was a lot to learn with the project. Making use of ES6 modules took some getting used to but eventually started making it easier to clean up my code and more loosely couple my "classes". I think the biggest challenge initially was using local storage to substitute a backend. I wasn't able to reference data objects in the way I prefer. Once I found my footing with local storage and realized I could "index" my hashes by iterating through local storage, this wasn't an issue.

I solved most of the problems with this project by breaking down my functions further and further, keeping the Single responsibility principle top of mind. Keeping my code and classes neat was challenging when dealing with so many moving and interacting parts. However, using modules seemed to reinforce having organized code and classes/functions that only have one responsibility. Plus this made it much easier to fix bugs.

All in all, this project was good practice for writing cleaner, more loosely coupled code and getting familiar with webpack and ES6 modules.