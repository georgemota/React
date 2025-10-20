

const apiKey = 'LX1CxfiadQ5omgvTdiBz0rQToZGkBppd';

const petition = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

petition
.then( resp => resp.json() )
.then( ({data}) => {
    const { url } = (data.images.original.url);

    const img = document.createElement('img');
    img.src = url;

    document.body.append( img );
})
.catch( console.warn );

