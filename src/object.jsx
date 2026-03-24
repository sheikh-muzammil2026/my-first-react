export default function PracticeObject({song}) {

   const {year, genre, language, artist,  title} = song
    return(
        <>
        <h4>Description of song</h4>
        <p>title: {title}</p>
        <p>artist:  {artist}</p>
        <p>language: {language} </p>
        <p>genre: {genre} </p>
        <p>year: {year}</p>
        </>
    )
}