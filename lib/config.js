export default {
    costs: {
      default_weekday: 300, //default week day price
      default_weekend: 500, //for Friday and Saturday nights
  
      custom: {
        2023: {
          6: {
            default_weekday: 700, //for the entire month of june, weekdays are 700
            default_weekend: 1700, //for the entire month of june, weekends are 1700
            24: 1000,
            25: 1000,
          },
        },
      },

      blocked: {
        2023: {
          3: [20, 21, 22], //block these days in March
        },
      },

      booked: {
        2022: {
          3: [17, 24, 25], //these days in March are reserved
        },
      },

    },
  }