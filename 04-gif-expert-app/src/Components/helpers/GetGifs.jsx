export const getGifs = async ( category ) => {
    const limite = 10;
    const apiKey = '53MPTZLi9C9x4OI5t0OEW4bU5FWeCdLQ';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=${limite}`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;
}


