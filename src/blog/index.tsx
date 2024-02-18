import type { JSX } from "soar/jsx-runtime"
import { type PostMeta, posts } from "./_.tsx"
import Html from "../_html.tsx"
import Wrapper from "../_wrapper.tsx"
import path from "node:path"
import { format } from "date-fns"

const group = <T,>(
	arr: T[],
	fn: (element: T, index: number, array: T[]) => string,
): Record<string, T[]> =>
	arr.reduce(
		(acc, element, index, array) => {
			acc[fn(element, index, array)] = acc[fn(element, index, array)] || []
			acc[fn(element, index, array)].push(element)
			return acc
		},
		{} as {
			[key: string]: T[]
		},
	)

const Page = async ({ url, generator }: JSX.PageProps) => {
	const grouped = group(posts, (post) => post.date.getFullYear().toString())

	const Group = ({ group }: { group: PostMeta[] }) =>
		(
			<div class="group">
				{group.map((post) => (
					<div class="post">
						<a href={post.url}>{post.title}</a>
						<time datetime={post.date.toISOString()}>
							{format(post.date, "MMM do, yyyy")}
						</time>
					</div>
				))}
			</div>
		).styled`
      div.group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      div.post {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        time {
          color: var(--sub);
        }
      }
    `

	return (
		<Html generator={generator} url={url}>
			<Wrapper>
				{Object.entries(grouped)
					.sort(([a], [b]) => b.localeCompare(a))
					.map(
						([year, group]) =>
							(
								<>
									<h2>{year}</h2>
									<Group group={group} />
								</>
							).styled`
            h2 {
              font-size: 1em;
              font-weight: 400;
              margin: 0;
              grid-column: r-side;
              color: var(--sub);
            }
          `,
					)}
			</Wrapper>
		</Html>
	)
}

export default Page
