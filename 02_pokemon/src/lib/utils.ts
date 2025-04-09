import type { FavPokemon } from '@interfaces/pokemon.type'

export function getFavoritesPokemons(): FavPokemon[] {
	return JSON.parse(localStorage.getItem('favPokemons') ?? '[]') as FavPokemon[]
}

export function setFavoritesPokemons(value: string): void {
	localStorage.setItem('favPokemons', value)
	return
}

export function removeFavoritePokemon(pokemonId: number, favorites: FavPokemon[]) {
	const updatedFavorites: FavPokemon[] = favorites.filter(pokemon => pokemon.id !== pokemonId)
	return updatedFavorites as FavPokemon[]
}

export function isPokemonFavorite(favorites: FavPokemon[], pokemonId: number): boolean {
	return favorites.some(pokemon => pokemon.id === pokemonId)
}
