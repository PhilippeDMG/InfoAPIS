interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: string[]
  url: string
  created: string
}

interface Info {
  count: number
  pages: number
  next: string | null
  prev: string | null
}
export interface ApiResponse {
  info: Info
  results: Character[]
}
export type BaseProp = {
  name: string
  id: number
}

export type PersonajeProp = BaseProp & {
  image: string
  species: string
}

export type UbicacionProp = BaseProp & {
  type: string
  dimension: string
}

export type EpisodioProp = BaseProp & {
  episode: string
}
