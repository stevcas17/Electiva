declare global {
  namespace JSX {
    // This interface is used to support angular entry point to render. Configure the mf-ang-root with the name of your microfrontend
    interface IntrinsicElements {
      'mf-ang-root': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>; // Normal web component
    }
  }
}

export {};
