let KEY = "PsydixbCvVRoEYsnOoJ5ntdTv1awDjxV";
document.addEventListener('DOMContentLoaded', init)
function init(){
    document.getElementById('search').addEventListener('click', ev =>{
        ev.preventDefault();
        
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`
        let str = document.getElementById('search-input').value.trim()
        url = url.concat(str);
       
        fetch(url)
        .then(response => response.json())
        .then(content =>{
            
            let fig = document.createElement('figure')
            let img = document.createElement('img')
            let fc = document.createElement('figcaption')
            img.src = content.data[0].images.downsized.url;
            img.alt = content.data[0].title
            fc.textContent = content.data[0].title;
            fig.appendChild(img);
            fig.appendChild(fc)
            let out = document.querySelector('.search-output');
            out.insertAdjacentElement('afterbegin', fig)
            document.getElementById('search-input').value = ''
        })
        .catch(err =>{
            console.log(err)
        })
    })
}