import React from 'react';
import Avatar from "../../../../shared/components/Avatar/Avatar";

const UserInfo = props => {
    return (
        <React.Fragment>
            <section className='user-info__container'>
                <div className='user-info__cover-photo'>
                    <div className='gradient'>
                        <div className='user-info__top row'>
                            <Avatar alt='alt' avatarUrl='https://avatars3.githubusercontent.com/u/47067438?s=460&v=40'/>
                            <h2 className='section__title'>Papryk Pozwadowski</h2>
                        </div>

                        <div className='row'>
                        <div className='user-info__bottom__account row'>
                            <p className='section__text user-info__account-type'>Free</p>
                            <p className='section__text'>Papryk's cool nick</p>
                            <p className='section__text'>100 Followers</p>
                            <p className='section__text'>12 Following</p>
                        </div>

                        <div className='user-info__bottom__places row'>
                            <p className='section__text'>25 Images</p>
                            <p className='section__text'>3 Places</p>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default UserInfo;