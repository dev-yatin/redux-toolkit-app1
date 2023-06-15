1. Redux is a predictable state container. It is called predictable because from the actions dispatch log, you can know what has happened and why it happened.

2. Redux has 3 core concepts: store consist of state of application, action indicate what type of change has to be made and reducer which tie action to store.

3. Redux 3 principles:

- The global state of application is stored in a object inside a single store. So it will be single object of states saved inside store.
- Only way to change state is to dispatch a action.
- Reducers update the state in store based on action. They will be pure reducer.

4. Redux Store

- Hold application state. There can be 1 store in an application.
- Allow access to state via `getState` method.
- Allow state to be updated vis `dispatch` method.
- Register listener via `subscribe` method.
- Unregister lister via function returned by `subscribe` method

5. Redux Middleware

- Come in role between dispatching a action to its reaches reducer. It is used for logging, crash reporting, performing asynchronous task etc.

6. Redux Toolkit is official, optionated batteries included toolset for efficient redux development.

- Abstract over setup process.
- Handle the most common use case.
- Include some useful utilities
