export type ChatData = {
  message: string;
  user: string;
};

export type ChatState = {
  data: ChatData[];
  newDataCount: number;
};

export type ChatSubscribeAction = (value: ChatState) => void;
