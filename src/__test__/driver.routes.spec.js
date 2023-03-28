const request = require('supertest')
const baseURL = 'http://localhost:3001'

const creds = { email: 'ahmed@operator.com', password: '12345' }
let token

describe('GET /driver', () => {
  beforeAll(async () => {
    token = (await request(baseURL)
      .post('/auth/login')
      .set('Content-Type', 'application/json')
      .set('x-api-key', '1be8d583-bfdf-46f8-997f-0db783ba2a9c')
      .send(creds)).body
  })

  it('should return 200', async () => {
    const response = await request(baseURL)
      .get('/driver')
      .set('Content-Type', 'application/json')
      .set('x-api-key', '1be8d583-bfdf-46f8-997f-0db783ba2a9c')
      .set('Authorization', 'Bearer ' + token)
    expect(response.statusCode).toBe(200)
    expect(response.body.error).toBe(undefined)
  })
})
