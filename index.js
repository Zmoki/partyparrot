function listOfPartyParrots() {
	return new Promise((resolve, reject) => {
		const parrotsUrl = 'https://raw.githubusercontent.com/jmhobbs/cultofthepartyparrot.com/master/parrots.json'

		fetch(parrotsUrl)
			.then(response => {
				if(response.ok) {
					return resolve(response.json())
				}
			})
			.catch(error => reject(error))
	})
}

function parrot(name = 'Parrot') {
	return new Promise((resolve, reject) => {
		listOfPartyParrots()
			.then(parrots => {
				const parrot = parrots.find((element) => (element.name == name))

				if(!parrot || !parrot.gif) {
					return reject('Not found parrot')
				}

				return resolve(`http://cultofthepartyparrot.com/parrots/${parrot.gif}`)
			})
			.catch(error => reject(error))
	})
}

export {listOfPartyParrots as list}
export default parrot
