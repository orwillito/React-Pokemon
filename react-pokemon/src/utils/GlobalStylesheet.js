// configure screen width thresholds
const ScreenSizes = {
  DESKTOP: 992,
  TABLET: 768,
  PHONE: 576,
};

const sizes = {
  desktop: ScreenSizes.DESKTOP,
  tablet: ScreenSizes.TABLET,
  phone: ScreenSizes.PHONE,
};

// iterate through sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
// use media methods with styled-component instead of raw @media queries
const StyledContent = styled.div`
  width: 100% ${media.desktop`
     padding:  0.625em;
   `} ${media.tablet`
     padding: 0.66em;
     max-width: 46.66em;
   `} ${media.phone`
     padding: 1.33em;
     max-width: 60em;
   `};
`;

export class Content extends React.Component {
  render() {
    return <StyledContent>{this.children}</StyledContent>;
  }
}
