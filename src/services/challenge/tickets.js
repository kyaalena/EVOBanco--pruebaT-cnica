
const fs = require('fs/promises')
const csv = require('csv')
const txtToJSON = require("txt-file-to-json");

async function textFileToJson(file)
{
    console.log('file', file)
    // const dataInJSON = txtToJSON({ filePath: file });
    // const data = await fs.readFile(CHALLENGE1, { encoding: 'utf8' });
    

    const data = csv()
        .from(fs.createReadStream(file), { delimiter: ',', escape: ';' })
        .to(fs.createWriteStream('./file.csv'))

    return dataInJSON
}

module.exports = {
    textFileToJson
};

