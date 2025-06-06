import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: ({ children, searchParams, ...props }) => (
      <article className="prose prose-invert dark:prose-invert max-w-none" {...props}>
        {children}
      </article>
    ),
    ...components,
  }
}