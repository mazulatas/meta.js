import { IType } from './type'

type constructor<T> = (...args: any[]) => T

export interface IConstructorDecorationFunction<T = any> {
  (constructorFunction: constructor<T>): IType<T>
}

export interface IMethodDecoratorFunction<T = any> {
  (constructorFunction: constructor<T>, methodName: string, descriptor?: PropertyDescriptor): void
}

export interface IFieldDecoratorFunction<T = any> {
  (constructorFunction: constructor<T>, fieldName: string): void
}

export interface IParamDecoratorFunction<T = any> {
  (constructorFunction: constructor<T>, paramName: string, index: number): void
}
