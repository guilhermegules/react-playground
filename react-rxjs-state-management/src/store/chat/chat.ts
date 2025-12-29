import { BehaviorSubject } from "rxjs";
import { ChatState, ChatSubscribeAction, ChatData } from "./chat.type";

const initialState: ChatState = {
  data: [],
  newDataCount: 0,
};

const chatState = new BehaviorSubject(initialState);

export const chatStore = {
  init: () => chatState.next(initialState),
  subscribe: (action: ChatSubscribeAction) => chatState.subscribe(action),
  sendMessage: (data: ChatData) => {
    chatState.next({
      ...chatState.value,
      data: [...chatState.value.data, data],
      newDataCount: chatState.value.newDataCount + 1,
    });
  },
  clearChat: () => {
    chatState.next(initialState);
  },
  initialState,
};
