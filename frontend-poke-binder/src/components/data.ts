export interface ColourOption {
    readonly value: string;
    readonly label: string;
    // readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
  }
  
  export const colourOptions = [
    { value: 'Fossil', label: 'Fossil',color: "#FFD700"  },
    { value: 'Base', label: 'Base Set',color: "#FFD700"},
    { value: 'Jungle', label: 'Jungle', color: "#FFD700"},
  ];

  

  

