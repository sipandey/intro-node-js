const App = require('./api');

App.showPostsForCurrentUser = (userId, cb) => {
    App.getPostsForUser(userId, posts => {
        const postTemplates = posts.map(post => {
            return `
            ${ post.title}
            ${ post.body}
            ${ post.createdBy}`
        })
        cb(postTemplates)
    })
}

App.showUserProfile = (userId, cb) => {
    App.getUserById(userId, user => {
        const profile = `
                ${ user.name}
            `
        cb(user)
    })
}

module.exports = App;


