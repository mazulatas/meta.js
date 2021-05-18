import { stub } from '../models/core/stub'
import { NULL_TOKEN } from '../models/core/sumbols'
import { IInjectionToken } from '../models/di/injection-token'
import { Factory } from '../models/di/token'

export class InjectionToken<T> implements IInjectionToken<T> {

  public static create<T>(name: string | symbol, provider?: Factory<T>): IInjectionToken<T> {
    return new InjectionToken(name, provider)
  }

  public static null(): IInjectionToken<null> {
    return new InjectionToken(NULL_TOKEN)
  }

  private constructor(private desc: string | symbol, public provider: Factory<T> = stub) {}

  public get name() {
    return this.desc
  }

  public toString() {
    return this.name.toString()
  }

}