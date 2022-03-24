lexers = require('@babel/highlight');

// Get All Visualizers
const visualizers = document.querySelectorAll('.visualizer');
const menuVisualizers = document.querySelectorAll('.menu-visualizer');

// Check if there are any visualizers
if (visualizers) {
  // Setup each visualizer
  visualizers.forEach((visualizer) => {
    // Grab actions and results panels
    const actions = visualizer.querySelector('.actions');
    const results = visualizer.querySelector('.results');

    // Grab all the buttons and example elements
    const actionBtns = actions.querySelectorAll('.button');
    const examples = results.querySelectorAll('.example');

    // Set the default classes for the examples, found in `data-defaults` attribute
    examples.forEach(
      (example) =>
        (example.classList = ['example', example.dataset.defaults].join(' '))
    );

    // Make buttons clickable, applies the buttons `data-class` attribute to the example
    actionBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        examples.forEach((example) => {
          example.innerHTML = null;

          // Determines how many example child elements to display, will always display at least one
          if (btn.dataset.children) {
            for (i = 0; i < btn.dataset.children; i++) {
              example.appendChild(exampleEl(btn.dataset.childclass));
            }
          } else {
            example.appendChild(exampleEl(btn.dataset.childclass));
          }

          // Sets a class on the parent element
          if (btn.dataset.class) {
            example.classList = [
              'example',
              example.dataset.defaults,
              btn.dataset.class,
            ].join(' ');
          } else {
            example.classList = ['example', example.dataset.defaults].join(' ');
          }
        });
      });
    });
  });
}

// Creates the child class elements
const exampleEl = (childClasses) => {
  const el = document.createElement('div');
  const classes =
    'example-element border border--color-white background-light-purple';
  el.classList = [classes, childClasses].join(' ');

  return el;
};

// Check if there are any menu visualizers
if (menuVisualizers) {
  // Setup each visualizer
  menuVisualizers.forEach((visualizer) => {
    // Grab actions and results panels
    const actions = visualizer.querySelector('.actions');
    const results = visualizer.querySelector('.results');

    // Grab all the buttons elements in action section
    const actionBtns = actions.querySelectorAll('.button');

    // Make buttons clickable, applies the buttons `data-class` attribute to the example
    actionBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        // Apply styling to button while clicked
        let btnClasses = ['background-purple', 'text-white'];
        btnClasses.forEach(btnClass => btn.classList.toggle(btnClass));

        // Grab menu sandbox and code block
        const menuSandbox  = results.querySelector('.site-menu');
        const menuCodeBlock = document.querySelector('#menu-visualizer-code-block').querySelector('pre');
        const codeToBeRemoved = menuCodeBlock.querySelector('code');

        // Set classes on sandbox and code block
        menuSandbox.classList.toggle(btn.dataset.class);
        let code = document.createElement('code');
        code.innerHTML = menuSandbox.outerHTML
        menuCodeBlock.replaceChild(code, codeToBeRemoved);
        const lexer = lexers.Get("html");
      });
    });
  })
}