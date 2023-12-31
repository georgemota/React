export const  getGifs = async( category ) => 
    {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=53MPTZLi9C9x4OI5t0OEW4bU5FWeCdLQ&q=${category}&limit=50`;
        const resp = await fetch( url );
        const { data } = await resp.json();
        
        // console.log(data);

        const gifs = data.map( gif => ({
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }));

        return gifs;
    }