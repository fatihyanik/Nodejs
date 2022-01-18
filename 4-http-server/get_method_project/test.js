const obj = [
    {
      "id": 0,
      "brand": "BMW",
      "model": 2005,
      "power": 155,
      "gear": "auto",
      "fuel": "benzin",
      "prise": 2000,
      "doors": 4
    },
    {
      "id": 1,
      "brand": "Audi",
      "model": 2010,
      "power": 200,
      "gear": "manual",
      "fuel": "diesel",
      "prise": 3500,
      "doors": 2
    },
    {
      "id": 2,
      "brand": "Ford",
      "model": 2012,
      "power": 135,
      "gear": "auto",
      "fuel": "diesel",
      "prise": 4000,
      "doors": 4
    },
    {
      "id": 3,
      "brand": "Opel",
      "model": 2002,
      "power": 115,
      "gear": "manual",
      "fuel": "benzin",
      "prise": 1500,
      "doors": 4
    },
    {
      "id": 4,
      "brand": "Mercedes",
      "model": 2015,
      "power": 255,
      "gear": "auto",
      "fuel": "benzin",
      "prise": 5000,
      "doors": 4
    },
    {
      "id": 5,
      "brand": "Mazda",
      "model": 2009,
      "power": 165,
      "gear": "manual",
      "fuel": "benzin",
      "prise": 3000,
      "doors": 2
    },
    {
      "id": 6,
      "brand": "Smart",
      "model": 2016,
      "power": 110,
      "gear": "auto",
      "fuel": "electro",
      "prise": 5000,
      "doors": 2
    },
    {
      "id": 7,
      "brand": "Mini",
      "model": 2017,
      "power": 175,
      "gear": "auto",
      "fuel": "benzin",
      "prise": 4500,
      "doors": 2
    },
    {
      "id": 8,
      "brand": "Jaguar",
      "model": 2003,
      "power": 160,
      "gear": "manual",
      "fuel": "diesel",
      "prise": 2400,
      "doors": 4
    },
    {
      "id": 9,
      "brand": "Jeep",
      "model": 2010,
      "power": 240,
      "gear": "auto",
      "fuel": "benzin",
      "prise": 8000,
      "doors": 4
    },
    {
      "id": 10,
      "brand": "Volkswagen",
      "model": 2009,
      "power": 135,
      "gear": "manual",
      "fuel": "benzin",
      "prise": 3200,
      "doors": 4
    }
  ]
  
  const product = obj.find(o =>o.id === 10)
  console.log(product)