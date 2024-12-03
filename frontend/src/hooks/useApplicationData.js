import {useCallback, useReducer, useEffect} from 'react';

// action types
export const ACTIONS = {
    FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
    FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
    SET_PHOTO_DATA: 'SET_PHOTO_DATA',
    SET_TOPIC_DATA: 'SET_TOPIC_DATA',
    OPEN_MODAL: 'OPEN_MODAL',
    CLOSE_MODAL: 'CLOSE_MODAL'
};

// initial state
const initialState = {
    isModalOpen: false,
    photoDetails: null,
    favoritePhotos: [],
    photoData: [],
    topicData: []
};

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.FAV_PHOTO_ADDED:
            return {
                ...state,
                favoritePhotos: [...state.favoritePhotos, action.photoId]
            };
        case ACTIONS.FAV_PHOTO_REMOVED:
            return {
                ...state,
                favoritePhotos: state.favoritePhotos.filter(id => id !== action.photoId)
            };
        case ACTIONS.OPEN_MODAL:
            return {
                ...state,
                photoDetails: action.details,
                isModalOpen: true
            };
        case ACTIONS.CLOSE_MODAL:
            return {
                ...state,
                photoDetails: null,
                isModalOpen: false
            };
        case ACTIONS.SET_PHOTO_DATA:
            return {
                ...state,
                photoData: action.payload
            };
        case ACTIONS.SET_TOPIC_DATA:
            return {
                ...state,
                topicData: action.payload
            };
        default:
            throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
    }
}

const useApplicationData = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // fetch and store photos and topics data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [photoResponse, topicResponse] = await Promise.all([
                    fetch("/api/photos"),
                    fetch("/api/topics")
                ]);

                const photoData = await photoResponse.json();
                const topicData = await topicResponse.json();

                dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData });
                dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicData });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // toggle modal state
    const toggleModal = useCallback(() => {
        dispatch({
            type: state.isModalOpen ? ACTIONS.CLOSE_MODAL : ACTIONS.OPEN_MODAL,
            details: state.photoDetails
        });
    }, [state.isModalOpen, state.photoDetails]);

    // set photo details and open modal
    const openPhotoDetailsModal = useCallback((details) => {
        dispatch({type: ACTIONS.OPEN_MODAL, details});
    }, []);

    // close photo details modal
    const closePhotoDetailsModal = useCallback(() => {
        dispatch({type: ACTIONS.CLOSE_MODAL});
    }, []);

    // toggle favorite photo's ID
    const updateToFavPhotoIds = useCallback((photoId) => {
        if (state.favoritePhotos.includes(photoId)) {
            dispatch({type: ACTIONS.FAV_PHOTO_REMOVED, photoId});
        } else {
            dispatch({type: ACTIONS.FAV_PHOTO_ADDED, photoId});
        }
    }, [state.favoritePhotos]);

    // placeholder
    const onLoadTopic = useCallback(() => {
        // TODO
    }, []);

    return {
        state,
        updateToFavPhotoIds,
        openPhotoDetailsModal,
        closePhotoDetailsModal,
        onLoadTopic
    };
};

export default useApplicationData;
