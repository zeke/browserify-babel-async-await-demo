async function main () {
  try {
    const pkg = await fetch('http://localhost:8080/package.json')
    const data = await pkg.json()
    document.querySelector('pre').textContent = JSON.stringify(data, null, 2)
    document.querySelector('p').textContent = 'Success!'    
  } catch (err) {
    console.log('something went wrong', err)
  }
}

document.addEventListener('DOMContentLoaded', main)
