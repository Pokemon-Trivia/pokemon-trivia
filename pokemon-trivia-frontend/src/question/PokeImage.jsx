const PokeImage = ({imgUrl, name}) => {
   return (
      <>
         <h1>Loading...</h1>
         <img src={imgUrl} alt={`${name} pokémon facing front`} />
      </>
   )
}

export default PokeImage;