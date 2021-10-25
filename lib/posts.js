import { project_data } from '../data/project_data';

export function getPostData(id) {
    return project_data.filter(post => {
        return post.id === id;
    })[0];
}
export function getAllPostIds() {
    return [{
        params: {
            id: 'one'
        }
    },
    {
        params: {
            id: 'two'
        }
    }
    ];
}