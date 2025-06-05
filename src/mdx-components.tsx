import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="text-3xl font-bold my-4 " {...props} />,
    h2: (props) => <h2 className="text-2xl font-semibold my-3" {...props} />,
    h3: (props) => <h3 className="text-xl font-medium my-2" {...props} />,
    ...components,
  }
}