const data = [
    {
        ques: "What is React?",
        ans: `React is a front-end JavaScript library developed by Facebook in 2011.
        It follows the component based approach which helps in building reusable UI components.
        It is used for developing complex and interactive web and mobile UI.`,
    },
    {
        ques: "What are the features of React? ",
        ans: `It uses the virtual DOM instead of the real DOM.
        It uses server-side rendering.
        It follows uni-directional data flow or data binding.`
    },
    {
        ques: "List some of the major advantages of React",        
        ans: `It increases the application’s performance
        It can be conveniently used on the client as well as server side
        Because of JSX, code’s readability increases
        React is easy to integrate with other frameworks like Meteor, Angular, etc
        Using React, writing UI test cases become extremely easy`
    },
    {
        ques: "What are the limitations of React?",        
        ans: `React is just a library, not a full-blown framework
        Its library is very large and takes time to understand
        It can be little difficult for the novice programmers to understand
        Coding gets complex as it uses inline templating and JSX`
    },
    {
        ques: "Why can’t browsers read JSX?",
        ans: `Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser.`
    },
    {
        ques: "What is the significance of keys in React?",
        ans: `Keys are used for identifying unique Virtual DOM Elements with their corresponding data driving the UI. They help React to optimize the rendering by recycling all the existing elements in the DOM.`
    },
    {
        ques: "What is Redux?",
        ans: `Redux is one of the most trending libraries for front-end development in today’s marketplace. It is a predictable state container for JavaScript applications and is used for the entire applications state management.`
    },
    {
        ques: "What is a state in React and how is it used?",
        ans: `States are the heart of React components. States are the source of data and must be kept as simple as possible. Basically, states are the objects which determine components rendering and behavior. They are mutable unlike the props and create dynamic and interactive components. They are accessed via this.state().`
    }
]
export default data