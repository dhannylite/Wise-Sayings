const BASE_URL = "https://wise-sayings-506f2-default-rtdb.firebaseio.com"
export async function addQuote(data) {
    const response = await fetch(`${BASE_URL}/quotes.json`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
}

export async function getAllQuotes() {
    const response = await fetch(`${BASE_URL}/quotes.json`)
    const data = await response.json()
    const loadedData = []
    for (const key in data) {
        loadedData.push({
            author: data[key].author,
            text: data[key].text,
            id:key
        })
    }
    // console.log(loadedData)
    return loadedData
}

export async function getSingleQuote(id) {
    const response = await fetch(`${BASE_URL}/quotes/${id}.json`)
    const data = await response.json()
    return data
}

export async function addComment(data) {
    console.log(data)
    const response = await fetch(`${BASE_URL}/comments/${data.id}.json`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({text:data.text})
    })
    const postData = response.json()
}

export async function getAllComments(id) {
    const response = await fetch(`${BASE_URL}/comments/${id}.json`)
    const data = await response.json()
    const loadedData = []
    for (const key in data) {
        loadedData.push({
            author: data[key].author,
            text: data[key].text,
            id:key
        })
    }
    // console.log(loadedData,99)
    return loadedData
}