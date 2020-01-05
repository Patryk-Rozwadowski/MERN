import React from 'react';

import Avatar from '../../components/Avatar/Avatar';

const UserInfo = props => {
    return (
        <React.Fragment>
            <section className='user-info__container'>
                <div className='user-info__cover-photo'>
                    <div className='gradient'>
                        <div className='user-info__top row'>
                            <Avatar alt='alt' avatarUrl={props.avatarUrl}/>
                            <h2 className='section__title'>{props.nick}</h2>
                        </div>

                        <div className='row'>
                            <div className='user-info__bottom__account row'>
                                <p className='section__text user-info__account-type'>{props.accountype}</p>
                                <p className='section__text'>{props.username}</p>
                                <p className='section__text'>{props.followers} Followers</p>
                                <p className='section__text'>{props.following} Following</p>
                            </div>

                            <div className='user-info__bottom__places row'>
                                <p className='section__text'>{props.imageslen} Images</p>
                                <p className='section__text'>{props.placeslen} Places</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default UserInfo;