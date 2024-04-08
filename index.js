const promnt = require('prompt-sync')()
const getCourseData = require('./modules/getCourse')
const { writeFile } = require('fs')

const selectPage = promnt('Enter page number: ')
const jsonFileName = promnt('Enter json file name: ')

getCourseData(selectPage).then(data => {
    writeFile(`${jsonFileName}.json`, JSON.stringify(data), (err) => {
        if (err) throw err
        console.log('Data has been saved!')
    })
})





