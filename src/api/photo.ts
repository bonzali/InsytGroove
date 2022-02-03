import api from './api';

export async function getPhotoList(userId ?: number) {
    const params = {
        userId: userId,
        _limit: 15,
    };
    try {
        return await api.get({ url: '/photos', params });
    } catch (e) {
        console.log(e);
    }
}