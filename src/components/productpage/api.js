// api.js
export const createPG = async (pgData) => {
    console.log(pgData);
    const response = await fetch('/api/pg', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pgData)
    });

    const data = await response.json();
    return data;
}
