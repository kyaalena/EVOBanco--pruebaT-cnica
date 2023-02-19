const tickets = require('../../src/services/challenge/tickets')


describe('tickets', () =>
{
    const file = '../../../dataFiles/challenge1_input.txt'
    
    test('textFileToJson', async() =>
    {
        const data = await tickets.textFileToJson(file)
       
    })
})