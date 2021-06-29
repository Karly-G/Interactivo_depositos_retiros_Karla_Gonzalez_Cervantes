import { home } from './views/Home/home.js';
import { levelOne } from './views/Levels/Level_1/level_1.js';
// import { sesion } from './components/logIn.js';
// import { newusers } from './components/signUp.js';
// import { posts } from './components/posts.js';
// import { createPosts } from './components/createposts.js';
// import { profile } from './components/profile.js';

const rootDiv = document.getElementById('root');

// router
const routes = {
    '/': home,
    '/nivel_1': levelOne,
//   '/logIn': sesion,
//   '/signUp': newusers,
//   '/posts': posts,
//   '/createPosts': createPosts,
//   '/profile': profile,
};

const welcomeComponent = routes[window.location.pathname];
welcomeComponent(rootDiv);

export function onNavigate(pathname) {
    window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
    );

    const component = routes[pathname];
    component(rootDiv);
}
