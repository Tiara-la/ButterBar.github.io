/* eslint-disable prefer-promise-reject-errors */
class DataSource {
    static searchDrink(keyword) {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if (responseJson.drinks) {
                    return Promise.resolve(responseJson.drinks);
                } else {
                    return Promise.reject(`${keyword} is not found`)
                }
            })

    }

    static listDrink() {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                return Promise.resolve(responseJson.drinks)
            })
            .catch(error => {
                return Promise.reject(error)
            })
    }

}

export default DataSource;
