export const peopleDispatcher = {
    get: async() => {
        const response = await fetch ('https://www.swapi.tech/api/people', {
            method: 'GET',
            headers:{'Content-Type':'application/json'}
        })
        return await response.json()
    }
}