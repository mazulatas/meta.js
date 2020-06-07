import { ProvidedIn } from './provided-in'
import { Token } from './token'

export interface IInjectableParameters {
  provideAs?: Token<any>
  providedIn?: ProvidedIn
}
