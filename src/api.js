

export function getRandomVerb () {
    return fetch('http://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=verb&minCorpusCount=1000&maxCorpusCount=10000&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=c8h4aw4hwv6esy7fr1v2xbs4y2cugth7yj0qyfa66ykw7wl92')
        .then((res) => res.json())
        .then((data) => {
            if (!data) {
                throw new Error(data.message)
            }

            return data
        })
}

export function getRandomNoun () {
    return fetch('http://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=1000&maxCorpusCount=10000&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=c8h4aw4hwv6esy7fr1v2xbs4y2cugth7yj0qyfa66ykw7wl92')
        .then((res) => res.json())
        .then((data) => {
            if (!data) {
                throw new Error(data.message)
            }

            return data
        })
}