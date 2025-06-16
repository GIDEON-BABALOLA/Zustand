import { create } from "zustand"
import { devtools } from "zustand/middleware";
//immer is a built in middleware with zustand, and it can also be a package on it's own, also immer helps you mutate state, but at the background, the state is not actually getting mutated, but under the hood, as long as we are wrapped in the immer middleware, we are actually, updating the state is immutably
//you can initialize store with values and functions
export interface UserStore {
    username: string;
    email: string;
    setUsername: (username: string) => void;
    setEmail: (email: string) => void;
}
export const useUserStore = create(
devtools<UserStore>((set) => ({
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
    posts : Post[]
    setPosts: (posts: Post[]) => void;
    addPost: (post: Post) => void;
    removePost: (id: string) => void
}
export const usePostStore = create(
devtools<PostStore>((set) => ({
posts: [],
setPosts: (posts: Post[]) => set(() => ({ posts })),
addPost:  (post: Post) =>  set((state) => ({posts: [...state.posts, post]})),
removePost: (id: string) => set((state) => ({posts: state.posts.filter((post) => post.id !== id)}))
    }), { name: "posts", store: "posts"}
));

// { name: "posts", store: "posts"}, this part is needed as the second argument of devtools, so we can differentiate our states in redux devtools









