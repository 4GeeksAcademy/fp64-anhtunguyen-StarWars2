export const personDispatcher = {
    get: async(id) => {
        const response = await fetch (`https://www.swapi.tech/api/people/${id}`, {
            method: 'GET',
            headers:{'Content-Type':'application/json'}
        })
        return await response.json()
    }
}