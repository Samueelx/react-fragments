# React Fragments
It is required that every React Component must return a **single** JSX element. 
Because of this, we often use elements such as `<div>` to wrap other elements in our JSX. 
When rendered, this creates a DOM element for that outer `<div>` that is sometimes unnecessary.

### React Fragments
Instead we could use React fragments preventing the extra `divs` from being added to the DOM: 

        function Component() {
            return (
                <React.Fragment>
                    <p>Hello, I am a Child Component.</p>
                </React.Fragment>
            );
        }

`<React.Component>` allows a component ro return multiple elements **without adding a wrapper element that adds on to the DOM.**

### Shorthand Syntax
To make your JSX cleaner, one can use the shorthand syntax for fragments:

        function Component() {
            // <> === <React.Fragment>
            return (
                <>
                    <p>Hello, I am a Child Component.</p>
                </>
            );
        }

## Note
Fragments are not restricted to the outermost element being returned in JSX.