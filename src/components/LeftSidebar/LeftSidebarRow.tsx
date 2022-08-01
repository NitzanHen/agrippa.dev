/** @jsxImportSource solid-js */
import { For, Show } from 'solid-js/web';
import { Tree } from '../../utils/Tree';
import { LeftSidebarLink } from './LeftSideBarLink';

export interface LeftSidebarRowProps {
  tree: Tree<LeftSidebarLink>
}

function LeftSidebarRow(props: LeftSidebarRowProps) {
  const { tree: { data, children } } = props;
  const { text, link } = data;

  return (
    <div>
      <a href={link}>{text}</a>
      <Show when={!!children}>
        <ul>
          <For each={children}>
            {c => (
              <li>
                <LeftSidebarRow tree={c} />
              </li>
            )}
          </For>
        </ul>
      </Show>
    </div>
  )
}

export default LeftSidebarRow;




