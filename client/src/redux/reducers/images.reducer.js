import { FETCH_IMAGES, REQUEST_FETCH_IMAGES } from '../constants';

const requestImagesFetch = () => ({
    type: REQUEST_FETCH_IMAGES
})

export const imagesFetched = (images) => ({
    type: FETCH_IMAGES,
    payload: images
});

const initialState = {
    user_images: [{
        id: 123,
        name: 'Some cool name',
        author: 'Patryk',
        title: 'My first Image',
        description: 'Something new! Cool image!',
        imageUrl: 'https://images.pexels.com/photos/3095527/pexels-photo-3095527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        location: {
            lat: 51.702372,
            lng: 19.414996
        },
        creator: 'q1'
    },

    {
        id: Math.random(),
        name: 'Some cool name',
        author: 'Peter',
        title: 'Some cool image',
        description: 'Something new! Cool image!',
        imageUrl: 'https://images.pexels.com/photos/3095521/pexels-photo-3095521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        location: {
            lat: 51.702372,
            lng: 19.414996
        }
    }],

    users: {
        id: 'q1',
        name: 'Patryk',
        places: 3,
        image: 'https://images.pexels.com/photos/2987769/pexels-photo-2987769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        description: 'Hello world! Work is still in progress! :)'
    }
}


export function imagesReducer(state = initialState, { type, payload }) {
    debugger
    switch (type) {
        case FETCH_IMAGES:
        return {
            ...state,
            images: {...state.images, payload},
            };

        default:
            return state
    }
}