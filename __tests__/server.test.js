'use strict';

const superTest = require('supertest');
const { report } = require('../src/ routes/clothes');
const server = require('../src/ server');
const request = superTest(server.server);
let id;
let idClothes;

describe('Server', () => {
  it('handle invalid routes', async () => {
    const response = await request.get('/random');
    // console.log(response.body);
    expect(response.status).toEqual(404);
    expect(response.body.method).toEqual('GET');
  });
  it('handle server errors', async () => {
    const response = await request.get('/error');
    expect(response.status).toEqual(500);
  });
  // checking for routes status code and returned value for Food
  //Create a record
  it('Create a record', async () => {
    const response = await (await request.post('/api/v1/food/').send({
        type : 'healthy',
        price : '5',
    }))
    expect(response.status).toEqual(201);
    expect(response.body.data.type).toEqual('healthy');
    expect(response.body.data.price).toEqual('5');
    id = response.body.id
  });
  // Update a record 
  it('Update a record', async () => {
    const response = await request.put(`/api/v1/food/${id}`).send({
      type :'fast food',
      price : '6',
    });
    expect(response.status).toEqual(200);
    expect(response.body.data.type).toEqual('fast food');
    expect(response.body.data.price).toEqual('6');
  });
  // Read a record
  it('Read a record', async () => {
    const response = await request.get(`/api/v1/food/${id}`);
    expect(response.status).toEqual(200);
    expect(response.body.data.type).toEqual('fast food');
    expect(response.body.data.price).toEqual('6');
  });
  // Read all Records
  it('Read all record', async () => {
    const response = await request.get('/api/v1/food/');
    expect(response.status).toEqual(200);
    // console.log(response.body[0]);
    expect(response.body[0].data.type).toEqual('fast food');
    expect(response.body[0].data.price).toEqual('6');
  });
  // Delete a record
  it('Delete a record', async () => {
    const response = await request.delete(`/api/v1/food/${id}`);
    expect(response.status).toEqual(200);
    // console.log(response.body);
    expect(response.body).toEqual([]);
  });
  //=======================================
  // checking for routes status code and returned value for Food
  //Create a record
  it('Create a record', async () => {
    const response = await (await request.post('/api/v1/clothes/').send({
        type : 'healthy',
        price : '5',
    }))
    expect(response.status).toEqual(201);
    expect(response.body.data.type).toEqual('healthy');
    expect(response.body.data.price).toEqual('5');
    idClothes = response.body.id
  });
  // Update a record 
  it('Update a record', async () => {
    const response = await request.put(`/api/v1/clothes/${idClothes}`).send({
      type :'fast food',
      price : '6',
    });
    expect(response.status).toEqual(200);
    expect(response.body.data.type).toEqual('fast food');
    expect(response.body.data.price).toEqual('6');
  });
  // Read a record
  it('Read a record', async () => {
    const response = await request.get(`/api/v1/clothes/${idClothes}`);
    expect(response.status).toEqual(200);
    expect(response.body.data.type).toEqual('fast food');
    expect(response.body.data.price).toEqual('6');
  });
  // Read all Records
  it('Read all record', async () => {
    const response = await request.get('/api/v1/clothes/');
    expect(response.status).toEqual(200);
    // console.log(response.body[0]);
    expect(response.body[0].data.type).toEqual('fast food');
    expect(response.body[0].data.price).toEqual('6');
  });
  // Delete a record
  it('Delete a record', async () => {
    const response = await request.delete(`/api/v1/clothes/${idClothes}`);
    expect(response.status).toEqual(200);
    // console.log(response.body);
    expect(response.body).toEqual([]);
  });
});