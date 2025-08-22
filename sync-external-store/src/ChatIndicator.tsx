import { useSyncExternalStore } from "react";

function getSnapshot() {
  return navigator.onLine;
}

function subscribe(listener: VoidFunction) {
  window.addEventListener("online", listener);
  window.addEventListener("offline", listener);

  return () => {
    window.removeEventListener("online", listener);
    window.removeEventListener("offline", listener);
  };
}

export const ChatIndicator = () => {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot);

  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
};
