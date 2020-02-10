

export function getRandomVerb () {
    return fetch('http://xmyxoff-api.herokuapp.com/getverb')
        .then((res) => res.json())
        .then((data) => {
            if (!data) {
                throw new Error(data.message)
            }

            return data
        })
}

export function getRandomNoun () {
    return fetch('http://xmyxoff-api.herokuapp.com/getnoun')
        .then((res) => res.json())
        .then((data) => {
            if (!data) {
                throw new Error(data.message)
            }

            return data
        })
}