import { createGlobalStyle } from 'styled-components';

const normalize = `
  /*! modern-normalize | MIT License | https://github.com/sindresorhus/modern-normalize */html{box-sizing:border-box}*,::after,::before{box-sizing:inherit}:root{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}hr{height:0}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:SFMono-Regular,Consolas,'Liberation Mono',Menlo,Courier,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{padding:0}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}
`;

const GlobalStyles = createGlobalStyle`
  ${normalize};

  body {
    font-family: ${props => props.theme.font.secondary};
  }

  h1, h2, h3, p {
    margin: 0;
    font-weight: normal;
  }

  h1, h2 {
    font-family: ${props => props.theme.font.primary};
  }

  h1 {
    ${props => props.theme.font_size.xlarge};
  }

  h2 {
    ${props => props.theme.font_size.larger};
  }

  h3 {
    ${props => props.theme.font_size.large};
  }

  p {
    ${props => props.theme.font_size.regular};
    color: ${props => props.theme.color.black.light};
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    h1 {
      ${props => props.theme.font_size.larger};
    }

    h2 {
      ${props => props.theme.font_size.large};
    }

    h3 {
      ${props => props.theme.font_size.regular};
    }

    p {
      ${props => props.theme.font_size.small};
    }
  }

  button {
    border: none;
    background: none;
    outline: none;
    padding: 0;
    cursor: pointer;
  }

  input {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    display: inline-block;
    width: 100%;
    height: 32px;
    padding: 4px 11px;
    color: rgba(0, 0, 0, .65);
    font-size: 14px;
    line-height: 1.5;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
  }

  input.large {
    height: 48px;
    padding: 6px 11px;
    font-size: 16px;
  }

  input:focus,
  input:hover {
    border-color: ${props => props.theme.color.secondary};
    outline: 0;
  }

  .btn-base {
    outline: none;
    user-select: none;
    border: 0;
    padding: 12px 24px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 1px;
    /* text-transform: uppercase; */
  }

  .btn-contained {
    background-color: ${props => props.theme.color.secondary};
    color: white;
  }

  .btn-outlined {
    background-color: transparent;
    color: ${props => props.theme.color.secondary};
    border: 2px solid ${props => props.theme.color.secondary};
    transition: color 150ms ease-in, background-color 150ms ease-in, border-color 150ms ease-in;
    /* transition: background-color 500ms ease-in;
    transition:  500ms ease-in; */
  }

  .btn-outlined.btn-black {
    background-color: transparent;
    color: ${props => props.theme.color.black.light};
    border: 2px solid ${props => props.theme.color.black.light};
  }

  .btn-outlined:not(.btn-black):hover {
    background-color: ${props => props.theme.color.secondary};
    border-color: ${props => props.theme.color.secondary};
    color: white;
  }

  .error {
    color: red;
    font-size: 14px;
    margin-top: 8px;
  }

  a {
    cursor: pointer;
  }
`;

export default GlobalStyles;
