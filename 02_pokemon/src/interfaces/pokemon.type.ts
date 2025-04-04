export interface PokemonsResponse {
	count: number
	next: string
	previous: null
	results: Pokemon[]
}

export interface Pokemon {
	name: string
	url: string
}

export interface FavPokemon {
	id: number
	name: string
	image?: string
}
