declare function requireContext(
  path: string,
  deep?: boolean,
  filter?: RegExp
): __WebpackModuleApi.RequireContext;

declare interface NodeRequire {
  context: typeof requireContext;
}
