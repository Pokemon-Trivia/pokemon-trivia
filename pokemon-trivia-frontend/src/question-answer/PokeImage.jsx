const PokeImage = ({imgUrl, name}) => {
   return (
      <>
         <img src={imgUrl} alt={`${name} pokémon facing front`} />
      </>
   )
}

export default PokeImage;