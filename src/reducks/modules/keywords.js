
const KEYWORDS_REQUEST = 'keywords/KEYWORDS_REQUEST';
const KEYWORDS_RESPONSE_SUC = 'keywords/KEYWORDS_RESPONSE_SUC';
const KEYWORDS_RESPONSE_FAIL = 'keywords/KEYWORDS_RESPONSE_FAIL';
const URLSORT = 'keywords/URLSORT';
const URLSORT_SUC = 'keywords/URLSORT_SUC';
const URLSORT_FAIL = 'keywords/URLSORT_FAIL';
const PAGESORT = 'keywords/PAGESORT';
const PAGESORT_SUC = 'keywords/PAGESORT_SUC';
const PAGESORT_FAIL = 'keywords/PAGESORT_FAIL';
const SEMANTICSSEARCH = 'keywords/SEMANTICSSEARCH';
const SEMANTICSSEARCH_SUC = 'keywords/SEMANTICSSEARCH_SUC';
const SEMANTICSSEARCH_FAIL = 'keywords/SEMANTICSSEARCH_FAIL';

export function searchWordinSingleUrl(word, url) {
   return {
        types: [KEYWORDS_REQUEST, KEYWORDS_RESPONSE_SUC, KEYWORDS_RESPONSE_FAIL],
        promise: (client) => client.post('/word/only', {
            data: {word, url}
        })
    }
}
export function urlSort(word, urls) {
    return {
        types: [URLSORT, URLSORT_SUC, URLSORT_FAIL],
        promise: (client) => client.post('/word/multi', {
            data: {word, urls}
        })
    }
}
export function pageSort(word, urls,dept) {
    return {
        types: [PAGESORT, PAGESORT_SUC, PAGESORT_FAIL],
        promise: (client) => client.post('/word/multi/3', {
            data: {word, urls}
        })
    }
}
export function semanticsSearch(word, urls,dept) {
    return {
        types: [SEMANTICSSEARCH, SEMANTICSSEARCH_SUC, SEMANTICSSEARCH_FAIL],
        promise: (client) => client.post('/word/multi/semantic/3', {
            data: {word, urls}
        })
    }
}


const initialState = {
    loading: false,
    responseData: [],
    errorMessage:'',
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case KEYWORDS_REQUEST: {
            return {
                ...state,
                responseData: [action.result],
                loading: true
            }
        }
        case KEYWORDS_RESPONSE_SUC: {
            return {
                ...state,
                responseData: [action.result],
                loading: false
            }
        }
        case KEYWORDS_RESPONSE_FAIL: {
            return {
                ...state,
                responseData: [],
                loading: false
            }
        }
        case URLSORT: {
            return {
                ...state,
                responseData:[],
                loading: true
            }
        }case URLSORT_SUC: {
            return {
                ...state,
                responseData: [action.result],
                loading: false
            }
        }case URLSORT_FAIL: {
            return {
                ...state,
                responseData:[],
                errorMessage:action.result.errorMessage,
                loading: false
            }
        }case PAGESORT: {
            return {
                ...state,
                responseData:[],
                loading: true
            }
        }case PAGESORT_SUC: {
            return {
                ...state,
                responseData: [action.result],
                loading: false
            }
        }case PAGESORT_FAIL: {
            return {
                ...state,
                responseData:[],
                errorMessage:action.result.errorMessage,
                loading: false
            }
        }case SEMANTICSSEARCH: {
            return {
                ...state,
                responseData:[],
                loading: true
            }
        }case SEMANTICSSEARCH_SUC: {
            return {
                ...state,
                responseData: [action.result],
                loading: false
            }
        }case SEMANTICSSEARCH_FAIL: {
            return {
                ...state,
                responseData:[],
                errorMessage:action.result.errorMessage,
                loading: false
            }
        }
        default:
            return state;
    }
}
