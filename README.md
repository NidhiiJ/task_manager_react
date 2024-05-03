# Task Management App
[Link for app hosted on github pages](https://nidhiij.github.io/task_manager_react/)

## Design Approach
-  ### Separation of Concerns: 
     Each component or module targets a part of the Problem Statement
- ### State Management: 
    Use React's context API to allow centralized approach to global state management.
- ### Local Storage: 
    Data that should persist across page reloads is stored in local storage.
- ### Reusability: 
    Components and context are designed to be reusable and for easier scalability.

## Context Management
A separate file (MyContext.js) defines the context and its provider. This approach ensures a clear separation of the context managing global state and providing it to nested components.

## Maintaining State after Refresh
- ###  Initialize from Local Storage: 
    On component mount, the context provider retrieves stored data from local storage to initialize the application state. If no stored data exists, default values are used, which in our case is a predefined list of tasks.
- ### Update on State Change: 
    A useEffect hook ensures local storage is updated whenever the state changes, keeping it in sync with the latest state.

## Drag and Drop
Implemented Drag and drop functionality for tasks using native React event handlers like onDrag(), onDrop(), onDragStart(), onDragOver(), and onDragEnd(). 

## Component-based Structure 
The application is divided into distinct components targeting specific functionalities. This structure allows for better code organization. Components are designed to be reusable across different parts of the application.


## Conclusion 
This design approach focuses on creating a scalable, maintainable, and user-friendly application by leveraging React's component-based architecture, context for state management, and local storage for persistence