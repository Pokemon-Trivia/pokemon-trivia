const PokeImage = ({imgUrl, name}) => {
   return (
      <section id="poke-image">
         <img src={imgUrl} alt={`${name} pokémon facing front`} />
      </section>
   )
}

export default PokeImage;