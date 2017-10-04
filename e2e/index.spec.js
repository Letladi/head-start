import nightmare from 'nightmare'
import { expect } from 'chai'
import { visit } from 'util/helpers'
 
describe('When visiting the homepage', () => {
  it('it welcomes the user', async () => {
    const page = visit('/')

    let text = await page.evaluate(() => document.body.textContent).end()

    expect(text).to.include('Verifying Your Session...')
  })
})