import { useEffect, useState } from 'react'
import { getFavoritesPokemons, removeFavoritePokemon, setFavoritesPokemons } from '@lib/utils'
import type { FavPokemon } from '@interfaces/pokemon.type'
import { PokemonFavItem } from './PokemonFavItem'

export function PokemonsFavList() {
	const [favorites, setFavorites] = useState([] as FavPokemon[])

	useEffect(() => {
		const favPokemons = getFavoritesPokemons()
		setFavorites(favPokemons)
	}, [])

	const handleDelete = (pokemonId: number) => {
		const updatedFavorites = removeFavoritePokemon(pokemonId, favorites)
		setFavorites(updatedFavorites)
		setFavoritesPokemons(JSON.stringify(updatedFavorites))
	}

	return (
		<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6'>
			{favorites.map(pokemon => (
				<PokemonFavItem key={pokemon.id} pokemon={pokemon} deleteFav={handleDelete} />
			))}
		</div>
	)
}
