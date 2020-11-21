export const investors=[
  {
    name:'Conservative Investor',
    description:'A investor who takes the safest profits',
    trait:'Tolerate limited negative price movements (Cannot lose much money)',
    risk:'Low',
    target:'Capital Presevation',
    timeHorizon:'Long',
    recommendation:[
      {
        id:1,
        name:'REIT',
        abbrev:'REIT'
      },
      {
        id:2,
        name:'ETF',
        abbrev:'ETF'
      }
    ]
  },
  {
    name:'Balanced Investor',
    description:'Perfectly Balanced, as all things should be',
    trait:'Tolerate moderate negative price movements (Can afford to lose some money)',
    risk:'Medium',
    target:'Capital preservation + Capital gain',
    timeHorizon:'Medium - Long',
    recommendation:[
      {
        id:1,
        name:'Stock',
        abbrev:'Stock'
      },
      {
        id:1,
        name:'REIT',
        abbrev:'REIT'
      }
    ]
  },
  {
    name:'Aggressive Investor',
    description:'Danger is your middlename',
    trait:'Tolerate substantial negative price movements (Can afford to lose a lot of money)',
    risk:'High',
    target:'Substantial capital gain',
    timeHorizon:'Short - Long',
    recommendation:[
      {
        id:1,
        name:'Stock',
        abbrev:'Stock'
      },
      {
        id:1,
        name:'Warrants',
        abbrev:'Warrants'
      }
    ]
  }
]