import React from "react";

const SetTimeout = () => {
  const [cart, setCart] = React.useState(0);
  const [notification, setNotification] = React.useState(null);
  const [notificationWithError, setNotificationWithError] =
    React.useState(null);
  const timeoutRef = React.useRef();

  function handleClick() {
    setCart(cart + 1);
    setNotification("Item added on cart");
    setNotificationWithError("This message will popup");

    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setNotification(null);
    }, 2000);

    // With this we can't remove the previous set timeout
    setTimeout(() => {
      setNotificationWithError(null);
    }, 2000);
  }

  return (
    <div>
      <p>{notification}</p>
      <p>{notificationWithError}</p>
      <button onClick={handleClick}>Add on cart {cart} </button>
    </div>
  );
};

export default SetTimeout;
