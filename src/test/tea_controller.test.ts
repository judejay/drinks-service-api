import request from 'supertest';
import { app } from '../app';
test('GET /tea should return correct object', async () => {
const res = await request(app)
.get('/tea')
expect(res.statusCode).toEqual(200);
expect(res.body).toEqual({
drinkType: 'Tea',
name: 'Ceylon',
});
});


test('GET /tea should return correct object with different drink', async () => {
    const res = await request(app)
    .get('/tea') 
    .query({ teaName: 'Darjeeling' });   
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
    drinkType: 'Tea',
    name: 'Darjeeling',
    });
    });

    test('GET /tea should return correct object with no query', async () => {
        const res = await request(app)
        .get('/tea')    
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
        drinkType: 'Tea',
        name: 'Ceylon',
        });
        });