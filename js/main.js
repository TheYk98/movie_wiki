$(document).ready(() => {
    $('#searchform').on('submit', (e) => {
        let movie_name = ($('#searchText').val());
        search_movie(movie_name)
        e.preventDefault();
    });

});

function search_movie(mname)

{
    axios.get('http://www.omdbapi.com/?s=' + mname + '&apikey=3acc1b97').then((response) => {
        let movies=response.data.Search;
        let out='';
        $.each(movies,(index,movie)=>{
            out+=`
            <div class="col-md-3">
                <div class="well text-center">
                    <img src="${movie.Poster}"></img>
                    <h5>${movie.Title}</h5>
                    <a onclick="movieselected('${movie.imdbID}')" class="btn btn-primary" href="#">View</a>
                </div>
            </div>`;
        });
        $('#movies').html(out);
        })
        .catch((err)=> {
            console.log(err);
        });
}