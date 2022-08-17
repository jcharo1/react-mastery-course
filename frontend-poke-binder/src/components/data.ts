export interface ColourOption {
    readonly value: string;
    readonly label: string;
    // readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
  }
  
  export const colourOptions: readonly ColourOption[] = [
    { value: 'Fossil', label: 'Fossil',  },
    { value: 'Base', label: 'Base Set',},
    { value: 'Jungle', label: 'Jungle', },
  ];

  

  

