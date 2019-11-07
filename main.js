let title = document.getElementById('title')
let paragraph = document.getElementById('paragraph')

title.addEventListener('mouseover', (e) => {
  e.target.style.color = 'brown'
})

title.addEventListener('mouseout', (e) => {
  e.target.style.color = 'tan'
})

paragraph.addEventListener('mouseover', (e) => {
  e.target.style.border = '3px brown dotted'
})

paragraph.addEventListener('mouseout', (e) => {
  e.target.style.border = '3px tan dotted'
})
