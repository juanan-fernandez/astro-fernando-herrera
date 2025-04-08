import { useEffect, useState } from 'react'
import { getFavoritesPokemons } from '@lib/utils'
import type { FavPokemon } from '@interfaces/pokemon.type'

export function PokemonsFavList() {
	const [favorites, setFavorites] = useState([] as FavPokemon[])

	useEffect(() => {
		const favPokemons = getFavoritesPokemons()
		setFavorites(favPokemons)
	}, [])

	return (
		<div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
			{favorites.map(pokemon => (
				<div key={pokemon.id} className='flex flex-col items-center'>
					<img src={pokemon.image} alt={pokemon.name} className='w-24 h-24 object-cover rounded-full' />
					<p className='text-center'>{pokemon.name}</p>
				</div>
			))}
		</div>
	)
}
