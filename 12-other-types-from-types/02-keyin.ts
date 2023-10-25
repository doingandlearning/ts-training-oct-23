type APIResponse = {
  user: {
    userId: string;
    friendList: {
      count: number;
      friends: {
        firstName: string;
        lastName: string;
      }[];
    };
  };
};

type FriendList = APIResponse["user"]["friendList"];
type Friends = APIResponse["user"]["friendList"]["friends"];
type Friends1 = FriendList["friends"];
