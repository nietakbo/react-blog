const initialState = {
    posts:[
        {
            id: '1',
            title: 'Article title',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: '02-02-2022',
            author: 'John Doe',
            category: 'News',
        },
        {
            id: '2',
            title: 'second title',
            shortDescription: 'second description',
            content: 'second content',
            publishedDate: '06-09-2022',
            author: 'Kacie Hatfield',
            category: 'Movies',
        },
        {
            id: '3',
            title: 'third title',
            shortDescription: 'third description',
            content: 'third content',
            publishedDate: '03-07-2022',
            author: 'Marie Spence',
            category: 'Sport',
        },
    ],
    category: [ 
        { 
            id:1, 
            name:'Sport' 
        }, 
        {
            id:2, 
            name:'News' 
        },
        { 
            id:3, 
            name:'Movies'
        } 
    ]
}

export default initialState;