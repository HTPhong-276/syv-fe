import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../../Context/AuthProvider';

function VideoPage() {


    const { loggedUser } = useContext(AuthContext);

    return (
        <div>This video page is belong to {loggedUser.username}</div>
    )
}

export default VideoPage