# partyparrot

Add gif with party parrot to yuor project for start party!

## Install

```
npm install partyparrot
```

## Usage

```javascript
import parrot, {list as parrots} from 'partyparrot'

const img1 = document.getElementById('myImage1')
const img2 = document.getElementById('myImage2')

parrot()
.then(gifUrl => img1.src = gifUrl)
.catch(error => console.log(error))


parrot('🍔 Parrot')
.then(gifUrl => img2.src = gifUrl)
.catch(error => console.log(error))

parrots()
.then(listOfParrots => console.log(listOfParrots))
.catch(error => console.log(error))
```

## Methods

### `parrot`

Return promise, which resolve with git link.

#### Params

* `name` - name of parrot. 
  Examples: `'Shuffle Parrot'`, `'Slow Parrot'`, `'🍕 Parrot'`. 
  Default value is `'Parrot'`.

### `list`

Return array of objects, which contain info about parrot

```json
[
    {
        "gif": "parrot.gif",
        "name": "Parrot"
    },
    {
        "gif": "middleparrot.gif",
        "name": "Middle Parrot"
    },
    ...
]
```

