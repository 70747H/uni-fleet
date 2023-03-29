'use strict'

module.exports = {
  roles: [
    {
      _id: '642137ba7f49c2e50c1788e6',
      name: 'OPERATOR',
      permissions: [
        'GET_driver',
        'POST_driver',
        'GET_driver/:id',
        'PATCH_driver/:id',
        'DELETE_driver/:id'
      ]
    }
  ],
  users: [
    {
      _id: '641c137439c295de0d1b98be',
      name: 'Ali',
      email: 'ali@driver.com',
      password: '$2b$10$D/QNCw0e1oizOrigXQbMbupxg4Q4k9rErudUpJQlakyEpi12LKVV.',
      age: 29,
      mobile: '+201091781782',
      address: {
        lat: 123,
        long: 456
      },
      vehicle: '6422e8ec732e20a8a409edca',
      type: 'driver'
    },
    {
      _id: '641ace8c3c6d4bceb763e771',
      name: 'Ahmed',
      email: 'ahmed@operator.com',
      password: '$2b$10$jNL1A05123v9qhvxaV4tqOaGRRGh5XJlPOov5h8ANN1eDOHT7IU3K',
      type: 'operator',
      role: '642137ba7f49c2e50c1788e6'
    }
  ],
  vehicles: [
    {
      _id: '6422e8ec732e20a8a409edca',
      year: 2009,
      make: 'toyota',
      model: 'fortuner',
      type: 'suv',
      color: 'silver',
      fuelType: 'petrol',
      vin: 'JTNKU58E101109034',
      license: 'ABC123',
      driver: '641c137439c295de0d1b98be'
    }
  ],
  workorders: [
    {
      _id: '641c1bac5e0ab6dfaf74fb5e',
      name: 'unif-Hassabo international hospital',
      driver: '641c137439c295de0d1b98be',
      vehicle: '641c0e158ebe2410a396d5ff',
      startDate: '2023-03-21',
      status: 'idle',
      checkPoints: [
        '641c1bac5e0ab6dfaf74fb60',
        '641c1bac5e0ab6dfaf74fb61',
        '641c1bac5e0ab6dfaf74fb62',
        '641c1bac5e0ab6dfaf74fb63',
        '641c1bac5e0ab6dfaf74fb64',
        '641c1bac5e0ab6dfaf74fb65',
        '641c1bac5e0ab6dfaf74fb66',
        '641c1bac5e0ab6dfaf74fb67'
      ]
    }
  ],
  workorderpoints: [
    {
      _id: '641c1bac5e0ab6dfaf74fb60',
      location: {
        coordinates: [
          31.345705,
          30.058357
        ],
        type: 'Point'
      },
      workOrder: '641c1bac5e0ab6dfaf74fb5e'
    },
    {
      _id: '641c1bac5e0ab6dfaf74fb61',
      location: {
        coordinates: [
          31.345447,
          30.06028
        ],
        type: 'Point'
      },
      workOrder: '641c1bac5e0ab6dfaf74fb5e'
    },
    {
      _id: '641c1bac5e0ab6dfaf74fb62',
      location: {
        coordinates: [
          31.351036,
          30.060893
        ],
        type: 'Point'
      },
      workOrder: '641c1bac5e0ab6dfaf74fb5e'
    },
    {
      _id: '641c1bac5e0ab6dfaf74fb63',
      location: {
        coordinates: [
          31.351001,
          30.061097
        ],
        type: 'Point'
      },
      workOrder: '641c1bac5e0ab6dfaf74fb5e'
    },
    {
      _id: '641c1bac5e0ab6dfaf74fb64',
      location: {
        coordinates: [
          31.349919,
          30.060968
        ],
        type: 'Point'
      },
      workOrder: '641c1bac5e0ab6dfaf74fb5e'
    },
    {
      _id: '641c1bac5e0ab6dfaf74fb65',
      location: {
        coordinates: [
          31.349535,
          30.063448
        ],
        type: 'Point'
      },
      workOrder: '641c1bac5e0ab6dfaf74fb5e'
    },
    {
      _id: '641c1bac5e0ab6dfaf74fb66',
      location: {
        coordinates: [
          31.349256,
          30.065468
        ],
        type: 'Point'
      },
      workOrder: '641c1bac5e0ab6dfaf74fb5e'
    },
    {
      _id: '641c1bac5e0ab6dfaf74fb67',
      location: {
        coordinates: [
          31.348892,
          30.068147
        ],
        type: 'Point'
      },
      workOrder: '641c1bac5e0ab6dfaf74fb5e'
    }
  ]
}
