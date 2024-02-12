export interface Movie extends EntityMovie {
	original_language: string
	original_title: string | null
	url_image: string | null | undefined
	poster_path?: string | null
	release_date?: Date | string | null
}

export interface EntityMovie {
	id?: number
	idIMBD?: number | null
	overview?: string | null
	viewDate?: Date | null
	review?: string | null
	rating?: number | null
	releaseDate?: Date | null
	poster_path?: string | null
}

export interface BackMovie extends EntityMovie {
	originalLanguage: string
	originalTitle?: string | null
	posterPath?: string | null
}
