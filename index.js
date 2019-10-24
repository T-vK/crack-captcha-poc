#!/usr/bin/env node
const Tesseract = require('tesseract.js')

async function crackCaptcha(filePath) {
    const result = await Tesseract.recognize(filePath, 'eng', {
        tessedit_char_whitelist: '0123456789'
    })
    return result.text
}

async function main() {
    const captchaText = await crackCaptcha('./example-captcha.png')
    console.log('Captacha Text:', captchaText)
    process.exit()
}

main().catch(console.error)
