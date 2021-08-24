module.exports = {
  bracketSpacing: true,
  jsxBracketSameLine: true,
  singleQuote: true,
  trailingComma: 'es5',
  overrides: [
    {
      files: '*.yaml',
      options: {
        singleQuote: false,
      },
    },
  ],
};
