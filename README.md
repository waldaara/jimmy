# Requirements

- Angular CLI
- Ionic CLI

# Installation

1. Clone the repository
2. Run `npm install`
3. Run `ng generate environments` to create the environment files and fill the `environment.ts` file with the following content:

```typescript
export const environment = {
  production: false,
  apiKey: // Your API key here
};
```

4. Run `ionic serve`
