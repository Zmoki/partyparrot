import test from 'ava'
import parrot from '../index'

const rightGifUrlParrot = 'http://cultofthepartyparrot.com/parrots/parrot.gif'

test.cb('Give right gif link to Parrot' , t => {
	parrot('')
		.then(gifUrl => {
			if(gifUrl == rightGifUrlParrot) {
				t.pass()
			} else {
				t.fail(`Wrong gif url: ${gifUrl}`)
			}

			t.end()
		})
		.catch(error => {
			t.fail(JSON.stringify(error))
			t.end()
		})
})