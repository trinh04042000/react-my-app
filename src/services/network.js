import axios from 'axios';

const TIMEOUT = 60000;
export const networkState = {
    authorized: true,
    queue: [],
    unAuthorize: () => {
        networkState.authorized = false;
    },
    authorize: () => {
        networkState.authorized = true;
        networkState.queuePop();
    },
    queuePush: (callback) => networkState.queue.push(callback),
    queuePop: () => {
        while (networkState.queue.length) {
            const callback = networkState.queue.pop();
            callback();
        }
    },
};

export const handleUnAuthorize = (callback) => {
    networkState.queuePush(callback);
    if (!networkState.authorized) return;
    networkState.unAuthorize();

    // Refreshing access_token here
    // after refreshing token call networkState.authorize();
};

const promiseGet = (url, params, headers) => (resolve, reject) => {
    axios
        .get(url, {
            params,
            headers,
            timeout: TIMEOUT,
            responseType: 'json',
        })
        .then(({ data }) => {
            resolve(data);
        })
        .catch(({ response }) => {
            if (response.status === 401) {
                handleUnAuthorize(() =>
                    promiseGet(url, params, headers)(resolve, reject),
                );
                return;
            }
            reject(response.data);
        });
};

export const debouncedGet = (url, params, headers) =>
    new Promise(promiseGet(url, params, headers));

const promisePost = (url, params, headers) => (resolve, reject) => {
    axios
        .post(url, params, {
            headers,
            timeout: TIMEOUT,
            responseType: 'json',
        })
        .then(({ data }) => {
            resolve(data);
        })
        .catch(({ response }) => {
            if (response.status === 401) {
                handleUnAuthorize(() =>
                    promisePost(url, params, headers)(resolve, reject),
                );
            }
            reject(response.data);
        });
};

export const debouncedPost = (url, params, headers) =>
    new Promise(promisePost(url, params, headers));