import React from 'react';

const Blog = () => {
    return (
        <div className='mt-10 my-container'>
            <h1 className='text-2xl font-semibold mb-5'>When should you use context API?</h1>
            <p>
            The Context API in React should be used when need to share data or state between multiple components in application, without having to pass props down through every level of the component hierarchy. It allows you to create a global state that can be accessed by any component that needs it, making  code more modular and easier to manage.
            </p>

            <h1 className='text-2xl font-semibold mb-5 mt-3'>What is a custom hook?</h1>
            <p>A custom hook is a function in React that allows you to reuse stateful logic between components. </p>

            <h1 className='text-2xl font-semibold mb-5 mt-3'>What is useRef?</h1>
            <p>useRef is a hook in React that allows you to create a mutable reference that can be attached to a DOM element or any other value, and persists between re-renders of a component.</p>

            <h1 className='text-2xl font-semibold mb-5 mt-3'>What is useMemo?</h1>
            <p>useMemo is a hook in React that allows you to optimize the performance of your application by caching the result of a function call and returning the cached value when the function is called again with the same set of inputs.</p>
            

        </div>
    );
};

export default Blog;