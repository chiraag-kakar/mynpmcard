'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  // padding: 0,
  // margin: 0,
  borderStyle: 'double',
}

// Text + chalk definitions
const data = {
  name: chalk.white('Chiraag Kakar'),
  handle: chalk.white('@0212Chiraag'),
  work: chalk.white(' Full Stack Developer, CS Undergrad'),
  opensource: chalk.white('Member of OSSN, Mozilla ; Maintainer of "ckstats"') + chalk.green(' ⬢'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('chiraag-kakar'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~chiraag-kakar'),
  github: chalk.gray('https://github.com/') + chalk.green('chiraag-kakar'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('chiraag-kakar'),
  web: chalk.cyan('https://imchiraag.pythonanywhere.com'),
  npx: chalk.red('npx') + ' ' + chalk.white('@chiraag-kakar/mynpmcard  (via GitHub Package Registry)'),
  labelWork: chalk.white.bold(' Profession:'),
  labelOpenSource: chalk.white.bold('Open Source:'),
  labelTwitter: chalk.white.bold('Twitter:'),
  labelnpm: chalk.white.bold('npm:'),
  labelGitHub: chalk.white.bold('GitHub:'),
  labelLinkedIn: chalk.white.bold('LinkedIn:'),
  labelWeb: chalk.white.bold('Web:'),
  labelCard: chalk.white.bold('Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const opensourcing = `${data.labelOpenSource}  ${data.opensource}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               opensourcing + newline + newline + // data.labelOpenSource + data.opensource
               twittering + newline + // data.labelTwitter + data.twitter
               npming + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               webing + newline + newline + // data.labelWeb + data.web
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
