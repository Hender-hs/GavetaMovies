import { MovieData } from './movieTypes'

export interface SearchActorType {
  'adult':                boolean,
  'gender':               number,
  'id':                   number,
  'known_for':            [MovieData],​​
  'known_for_department': string,
  'name':                 string,
  'popularity':           number,
  'profile_path':         string,
}

export interface ActorSearchResult {
  'page':           number,
  'results':        [SearchActorType],
  'total_pages':    number,
  'total_results':  number
}