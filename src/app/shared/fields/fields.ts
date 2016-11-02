export const FIELDS = [
  {
    type: 'Text',
    sub_types: [
      {
        name: 'text',
        type:'text',
        component: 'TextComponent'
      },
      {
        name: 'textarea',
        type: 'textarea',
        component: 'TextareaComponent'
      }
    ]
  },
  {
    type: 'Options',
    sub_types: [
      {
        name: 'Select',
        type: 'select',
        component: 'SelectComponent'
      }
    ]
  }
];
