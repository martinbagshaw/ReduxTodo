# Redux Todo list
> putting together freecodecamp's redux todo list with create-react-app

## To get going
- clone the repo
- **npm start** in the directory
- [http://localhost:3000](http://localhost:3000) to view it in the browser

### My Notes
- [my redux notes](https://hackmd.io/s3QcTxWsSLmQwHCstxmcdQ?both#one) - knowledge this basic app is built with
- started with [this as the first step](https://hackmd.io/s3QcTxWsSLmQwHCstxmcdQ?both#1-Manage-State-Locally-first)
- drew inspiration [from here](https://codesandbox.io/s/9on71rvnyo) for the second stage, but attempting to have one connection to the redux store, as opposed to multiple

### Architecture
> a diagram to help you and me understand the whole redux thing...

...Will add when done

### Things I learnt
- I can cut down on the amount of code I need to write with:
    - Named (as opposed to default) exports with function components
    - Destructuring when passing arguments into a function like so (sort of already knew this though I didn't practice it before):
```
export const TodoAdd = ({ onChange, onClick, input }) => {
  return (
    <>
      <input className="text-input" onChange={onChange} value={input} />
      <button className="button" onClick={onClick}>
        Add
      </button>
    </>
  );
};
```

- Several files (action creators, action types, reducers, and selectors) need to be refactored from time to time in order to work together correctly.
- I can have one top level class component (**Interface.js**) that is connected to the Redux Store (through **InterfaceContainer.js**), and passes down all props to child function components. Multiple connector containers to Redux Store are not required.
- Not all application state should be added to the Redux store. For example, an unsubmitted todo list item does not need to be entered.
- Multiple actions can be dispatched to props (see **InterfaceContainer.js**).