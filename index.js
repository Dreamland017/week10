const express = require('express')
const app = express()

app.get('/', (req, res)=> {
    res.send('Hello World')
})

app.get('/getname',(req, res) => {
    res.send('Anusa Khongkasem')
})

app.get('/getprofile', (req, res) => {
    let data ={
        name: 'Anusa Khongkasem',
        age: 21,
        apocalypse: 'I do not want to go to heaven because there is no one of my friends up there',
        detail: 'กำลังศึกษาอยู่ที่มหาลัยกรุงเทพ, คณะวิศวกรรมศาสตร์, สาขามัลติมีเดียและเอ็นเตอร์เทนเมนต์, ชั้นปีที่ 2'
    }
    res.send(data)
})
app.get('/getabout', (req, res) => {
    let data ={
        name:'Junior',
        age: 21,
        email: 'anusa.khon@bumail.net',
        address: 'อ.คลองหลวง จ.ปทุมธาณี',
    }
    res.send(data)
})
app.get('/getproject', (req, res) => {
    let data ={
        project_name:'Yuika - Sukidakara',
        project_description: 'Yuika - Sukidakara (Lyric Video)',
        project_link: 'https://youtu.be/eYAd4uDotF0',
    }
    res.send(data)
})

app.get('/getcontact', (req, res) => {
    let data ={
        address: 'Thailand',
        email: 'anusa.khon@bumail.net',
        phone_number: '0838262147',
    }
    res.send(data)
})

app.listen(3000,() => {
    console.log('Start server at port 3000.')
})