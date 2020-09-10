import React from "react";

const AvatarBackground = ({profileBg, children}) =>
    <div
        style={{ backgroundImage: `url(${profileBg})` }}
        className='userCard__background'
    >
        {children}
    </div>

export default AvatarBackground;
