# useSyncExternalStore

[Doc](https://react.dev/reference/react/useSyncExternalStore)

## 🔍 Why Use `useSyncExternalStore` in React?

React introduced `useSyncExternalStore` in **React 18** to provide a **safe and consistent way to subscribe to external data sources** in concurrent rendering (e.g., with React Suspense or React Server Components).

---

### ✅ Main Reasons to Use It

| Reason                                       | Explanation                                                                                                                                           |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🔁 **Subscribe to external stores**          | It allows React components to subscribe to external state that’s **not managed by React**, like Redux, Zustand, or even custom global objects.        |
| ⚙️ **Concurrent rendering safe**             | It ensures React can **safely and correctly re-render** components even when rendering is interrupted or re-started.                                  |
| 🔄 **Consistency between render and commit** | Guarantees the value returned by the store is always **in sync with the latest committed state**. Avoids tearing (reading stale data during updates). |

---

### 🤔 What Problem Does It Solve?

Before React 18, people would subscribe to external stores using `useEffect`, like this:

```jsx
useEffect(() => {
  store.subscribe(() => setValue(store.get()));
}, []);
```

❌ This could _lead to tearing_ or inconsistent UI under concurrent rendering because useEffect runs after render.

✅ useSyncExternalStore fixes this by allowing React to:

- Get the value synchronously during render.
- Ensure updates are atomic and consistent with rendering.

### 📦 When to Use It

Use `useSyncExternalStore` when:

- You're working with external or custom state management outside React.
- You want to integrate with libraries like Redux (in React 18+) or Zustand.
- You're reading from external sources like:
  - localStorage
  - Media query listeners
  - Event emitters
  - Custom shared state
