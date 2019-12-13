export interface user {
    login: string;
    id: string;
    node_id: string;
    avatar_url: string;
    gravatar_url: string;
    url: string;
    html_url: string;
    follwers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: string;
    name: string;
    company: string;
    blog: string;
    location: string;
    email: string;
    hireable: string;
    bio: string;
    public_repos: string;
    public_gists: string;
    followers: string;
    following: string;
    created_at: string;
    updated_at: string;
}

export interface profileUser {
    login: string;
    id: string;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: string;
}

export interface search {
    total_count: string;
    incomplete_results: boolean;
    items: item[];
}
// export interface item{
//     login:string;
//     id:string;
//     node_id:string;
//     avatar_url:string;
//     gravatar_id:string;
//     url:string;
//     html_url:string;
//     followers_url:string;
//     following_url:string;
//     gists_url:string;
//     starred_url:string;
//     subscriptions_url:string;
//     organizations_url:string;
//     repos_url:string;
//     events_url:string;
//     received_events_url:string;
//     type:string;
//     site_admin:string;
//     score:number;
// }
export interface item {
    profile: profileUser;
    score: number;
}