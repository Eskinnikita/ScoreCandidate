const mongoose = require('mongoose')
const express = require('express')
const auth = require('../middlewares/auth')
const User = require('../models/User')

const router = express.Router()

router.post('/', async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).json({user, token})
    }
    catch(err) {
        res.status(400).send({error: err})
    }
})


router.post('/login', async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body

        const user = await User.findByCredentials(email, password)
        if (!user) {
            return res.status(401).send({
                error: 'Login failed! Check authentication credentials'
            })
        }
        const token = await user.generateAuthToken()
        res.send({
            user,
            token
        })
    } catch (err) {
        res.status(400).send({error: 'Ошибка авторизации'})
    }
})

router.get('/me', auth, (req, res) => {
    res.send(req.user)
})

router.get('/me/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter(token => {
            return token.token != req.token
        })
        await req.user.save()
        res.send()
    }
    catch(err) {
        res.status(500).json({error: err})
    }
})

module.exports = router