export default [
  {
    files: ['**/*.{js,jsx}'],
    ignores: ['dist/**'],
    rules: {
      'no-unused-vars': 'warn',
      'no-console': ['warn', { allow: ['error', 'warn'] }],
    },
  },
]
