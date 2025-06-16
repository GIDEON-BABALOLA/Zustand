import { create } from "zustand"
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
//Also run npm i immer
//immer is a built in middleware with zustand, and it can also be a package on it's own, also immer helps you mutate state, but at the background, the state is not actually getting mutated, but under the hood, as long as we are wrapped in the immer middleware, we are actually, updating the state immutably
//you can initialize store with values and functions
// 08123175773, 1993
// 08034694714, Sam, Electric Wallet
export interface UserStore {
    username: string;
    email: string;
    setUsername: (username: string) => void;
    setEmail: (email: string) => void;
}
export const useUserStore = create(
devtools<UserStore>(
    (set) => ({
    username: "gideon",
    email: "gideonbabalola69@gmail.com",
    setUsername: (username: string) => set(
        () => ({ username })), //This will only update the username field
    setEmail: (email: string) => set(
        () => ({ email }))
    }), { name: "user", store: "user"}
));
export interface Post {
    id: string;
    title: string;
    content: string;
}
export interface PostStore {
    posts : Post[];
    setPosts: (posts: Post[]) => void;
    addPost: (post: Post) => void;
    removePost: (id: string) => void
}
export const usePostStore = create(
devtools(
immer<PostStore>((set) => ({
posts: [],
setPosts: (posts: Post[]) => set(() => ({ posts })),
addPost: (post: Post) => set((state) => { state.posts.push(post)}), // we do not need (), since we are just pushing
removePost: (id: string) => set((state) => {
    const index = state.posts.findIndex((post) => post.id === id)
    if(index !== -1){
        state.posts.splice(index, 1) //1 means delete one
    }
})
    })), { name: "posts", store: "posts"}
));

// { name: "posts", store: "posts"}, this part is needed as the second argument of devtools, so we can differentiate our states in redux devtools