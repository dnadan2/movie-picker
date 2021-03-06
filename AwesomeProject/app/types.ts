import { ActionType, StateType } from 'typesafe-actions';

export type RootState = DeepReadonly<
  StateType<typeof import('./rootReducers').combinedReducer>
>;

export type RootAction = ActionType<typeof import('./rootActions').default>;

export type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

export type DeepReadonly<T> = T extends Array<infer R>
  ? DeepReadonlyArray<R>
  : T extends Function
  ? T
  : T extends object
  ? DeepReadonlyObject<T>
  : T;

export interface DeepReadonlyArray<T> extends ReadonlyArray<DeepReadonly<T>> {}

export type DeepReadonlyObject<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};