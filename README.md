# redux-todo
 - Prop drilling occurs when a parent component passes data down to its children and then those children pass the same data down to their own children. This process can continue indefinitely. At the end, it's a long chain of component dependencies that can be difficult to manage and maintain.
 - In simple words ,If you want to pass info to the innermost component, you would have to pass it down the hierarchy. You can't directly pass from Level 1 to Level 4.
 - So you will have to pass info to a component which wont be in need of that info.
   ![propdrilling](https://github.com/gayathrihk175/redux-todo/assets/101390505/9343efa5-9bb1-428e-8bdb-b504d57b7515)

 - One way to overcome this is using useContext.
 - useContext is a native React feature for sharing data between components without the need to manually pass props at each level of the hierarchy.
 - Another is ContextAPI.
 - Context API also allows data to be passed through a component tree without having to pass props manually at every level.
 - The difference between Context API and Redux lies in how they handle state changes. Redux takes a centralized approach, where state changes are managed in a central store. On the other hand, Context API deals with state changes on a components level, as they happen within each component.
 - Context API is perfect for sharing small bits of information between components. On the other hand, Redux is more powerful and comes with helpful features that Context API doesn't have. It's great for managing big chunks of data and handling requests to APIs.

   ![global-state](https://github.com/gayathrihk175/redux-todo/assets/101390505/804ae67a-0a2c-4a51-b86c-dbce35cc7a87)

  - In redux, when the info that needs to be shared is kept as a placed as a glober placeholder,anyone can reachout for that info and can even update as well.
  - If anyone and everyone can update the info , then the core foundation of react will be shaken that there should be one way of data flow and the UI should get updated.
  - As a result few principles need to be followed.
