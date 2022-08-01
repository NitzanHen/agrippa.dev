
export interface Tree<T> {
  data: T,
  children: Tree<T>[]
}

/**
 * Standard tree factory
 */
export const tree = <T>(data: T, children: Tree<T>[]): Tree<T> => ({ data, children });

/**
 * Creates a tree with the given data and no children.
 */
export const leaf = <T>(data: T): Tree<T> => tree(data, []);

/**
 * Creates a tree with a depth of 1 with the given root and children,
 * i.e. root has the given data and all children are leaves.
 */
export const branch = <T>(data: T, children: T[]): Tree<T> => tree(data, children.map(leaf));


export function flattenPreorder<T>({ data, children }: Tree<T>): T[] {
  return [data].concat(
    ...children.map(c => flattenPreorder(c))
  );
}