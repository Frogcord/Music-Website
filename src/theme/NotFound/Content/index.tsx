import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import type {Props} from '@theme/NotFound/Content';
import Heading from '@theme/Heading';
import NullSVG from '@site/static/img/404.svg';

import './404.css';

export default function NotFoundContent({className}: Props): JSX.Element {
  return (
    <main className={clsx('container margin-vert--xl', className)}>
      <div className="row">
        <div className="col col--6 col--offset-2">
          <NullSVG className="NullSVG" />
        </div>
      </div>
    </main>
  );
}
