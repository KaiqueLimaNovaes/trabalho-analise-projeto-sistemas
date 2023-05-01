import React from 'react';
import { P, Span, Link, H1, H2, H3 } from './text.styled'

const Text = ({ children, type, ...props }) => {
  return (
    <>
      {type === 'p' && <P {...props}>{children}</P>}

      {type === 'span' && <Span {...props}>{children}</Span>}

      {type === 'link' && <Link {...props}>{children}</Link>}

      {type === 'h1' && <H1 {...props}>{children}</H1>}

      {type === 'h2' && <H2 {...props}>{children}</H2>}

      {type === 'h3' && <H3 {...props}>{children}</H3>}
    </>
  );
};

Text.defaultProps = {
  type: 'span',
};

export default Text;
