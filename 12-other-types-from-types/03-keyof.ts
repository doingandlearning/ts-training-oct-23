type APIResponse = {
  user: {
    userId: string;
    friendList: {
      readonly count?: number;
      friends?: {
        firstName?: string;
        lastName?: string;
      }[];
    };
  };
};

type ResponseKeys = keyof APIResponse;
type UserKeys = keyof APIResponse["user"];
type FriendListKeys = keyof APIResponse["user"]["friendList"];

type FriendList = Required<{
  [K in "friends"]: APIResponse["user"]["friendList"][K];
}>;

type FriendList1 = Required<APIResponse["user"]["friendList"]>;

export {};
