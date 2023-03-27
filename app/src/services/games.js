import http from "../http-common";

export const getGameById = async (id) => {
    try {
        return await http.get(
            '/games/' + id
        )
    } catch (e) {
        throw e;
    }
}

export const getGames = async (params) => {
    try {
        return await http.get(
            '/games',
            { params }
        )
    } catch (e) {
        throw e;
    }
}

export const getRecentlyGames = async () => {
    try {
        return await http.get(
            '/games',
            {
                params: {
                    sort: 'id,desc',
                    size: 5
                }
            }
        )
    } catch (e) {
        throw e;
    }
}
