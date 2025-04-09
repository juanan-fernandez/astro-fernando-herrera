import type { FavPokemon } from '@interfaces/pokemon.type'

interface PokemonFavItemProps {
	pokemon: FavPokemon
	deleteFav: (id: number) => void
}

export function PokemonFavItem({ pokemon, deleteFav }: PokemonFavItemProps) {
	return (
		<div className='flex flex-col items-center bg-slate-700 p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
			<a href={`/pokemons/${pokemon.name}`}>
				<img
					src={pokemon.image}
					alt={pokemon.name}
					className='w-24 h-24 object-cover rounded-full'
					style={{ viewTransitionName: `fade-${pokemon.id}` }}
				/>
				<p className='ml-3 text-center capitalize'>{pokemon.name}</p>
			</a>
			<button
				className='mt-2 text-red-400  px-2 py-0.5 rounded hover:text-red-500 transition-colors duration-300'
				onClick={() => {
					deleteFav(pokemon.id)
				}}
			>
				Delete
			</button>
		</div>
	)
}
