
const BASE_URL = import.meta.env.VITE_FOOD_FUSION_API_BASE_URL

const FoodFusionApiClient = async ({ endpoint, method = 'GET', data = null, headers = {} }) => {
    
    const url = `${BASE_URL}${endpoint}`

    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
    };

    if (data) {
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, options);

        const contentType = response.headers.get('content-type');
        const isJson = contentType && contentType.includes('application/json');
        const responseData = isJson ? await response.json() : null;

        if (!response.ok) {
            throw {
                status: response.status,
                message: response.statusText,
                body: responseData,
            };
        }

        return responseData;

    } catch (error) {
        console.error('API error: ', error);
        throw error;
    }
}

export default FoodFusionApiClient;