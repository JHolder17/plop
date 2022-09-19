export default function (plop) {
 // controller generator
  plop.setGenerator('Vue-template-file', {
      description: 'Generate a default vue file',
      prompts: [{
          type: 'input',
          name: 'name',
          message: 'What is the name of this component?'
      }],
      actions: [{
          type: 'add',
          path: 'src/{{name}}.js',
          templateFile: 'templates/test.hbs'
      }]
  });
};
