import styled from 'styled-components'

const Container = styled.div`
  ${({ top }) => top ? `margin-top:  ${top * 8}px` : ''};
  ${({ right }) => right ? `margin-right:  ${right * 8}px` : ''};
  ${({ bottom }) => bottom ? `margin-bottom:  ${bottom * 8}px` : ''};
  ${({ left }) => left ? `margin-left:  ${left * 8}px` : ''};

  ${({ inline }) => inline ? `display: inline;` : ''};
`;

const Space = ({ ...props }) => {
  return <Container {...props} />
}

export default Space;