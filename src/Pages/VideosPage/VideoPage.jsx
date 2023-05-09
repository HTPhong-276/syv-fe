import React, { useState, useEffect } from 'react'

function VideoPage() {

    const [loggedUser, setLoggedUser] = useState('');

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('loggedUser'));
        setLoggedUser(user.username);
    })

    return (
        <div>This video page is belong to {loggedUser}</div>
    )
}

export default VideoPage