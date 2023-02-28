import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-from';

import './app.css';

const App = () => {

    const data = [
        {label: 'Going to learn React', important: false, id: 'lkjlk'},
        {label: 'That is so good', important: true, id: 'sdfa'},
        {label: 'I need a break...', important: false, id: 'adsfe'},
    ];
    return (
       <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
       </div>
    )
}

export default App;