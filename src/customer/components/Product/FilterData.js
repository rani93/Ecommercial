export const filters =[
    {
        id: 'color',
        name: 'Color',
        options: [
          { value: 'white', label: 'White', checked: false },
          { value: 'beige', label: 'Beige', checked: false },
          { value: 'blue', label: 'Blue', checked: true },
          { value: 'brown', label: 'Brown', checked: false },
          { value: 'green', label: 'Green', checked: false },
          { value: 'purple', label: 'Purple', checked: false },
        ],
      },
      {
        id: 'category',
        name: 'Category',
        options: [
          { value: 'new-arrivals', label: 'New Arrivals', checked: false },
          { value: 'sale', label: 'Sale', checked: false },
          { value: 'travel', label: 'Travel', checked: true },
          { value: 'organization', label: 'Organization', checked: false },
          { value: 'accessories', label: 'Accessories', checked: false },
        ],
      },
      {
        id: 'size',
        name: 'Size',
        options: [
          { value: '2l', label: '2L', checked: false },
          { value: '6l', label: '6L', checked: false },
          { value: '12l', label: '12L', checked: false },
          { value: '18l', label: '18L', checked: false },
          { value: '20l', label: '20L', checked: false },
          { value: '40l', label: '40L', checked: true },
        ],
      }
    ];

export const singleFilters =[
   
      {
        id: 'price',
        name: 'Price',
        options: [
          { value: '0-25', label: '$0 - $25', checked: false },
          { value: '25-50', label: '$25 - $50', checked: false },
          { value: '50-100', label: '$50 - $100', checked: true },
          { value: '100-200', label: '$100 - $200', checked: false },
          { value: '200+', label: '$200 & Above', checked: false },
        ],
    },
    {
        id: 'discont',
        name: 'Discount Range',
        options: [
           { value:"10%", label:"10% and above", checked:false},
           { value:"20%", label:"20% and below", checked:false},
           { value:"30%", label:"30% and below", checked:false},
           { value:"40%", label:"40% and below", checked:false},
           { value:"50%", label:"50% and below", checked:true},
              { value:"60%", label:"60% and below", checked:false},
              { value:"70%", label:"70% and below", checked:false},
              { value:"80%", label:"80% and below", checked:false}        ]

    },
    {
       id:"stock",
       name:"Availability",
       options:[
         { value:"In Stock", label:"In Stock", checked:true},
         { value:"Out of Stock", label:"Out of Stock", checked:false},
       ]
    }
]


