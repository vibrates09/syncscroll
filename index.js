const syncscroll = function () {
  const Width = 'Width'
  const Height = 'Height'
  const Top = 'Top'
  const Left = 'Left'
  const scroll = 'scroll'
  const client = 'client'
  const EventListener = 'EventListener'
  const addEventListener = 'add' + EventListener
  const length = 'length'

  const names = {}

  const elems = document.getElementsByClassName('sync' + scroll)

  // clearing existing listeners
  let i, j, el, found, name
  for (name in names) {
    if (names.hasOwnProperty(name)) {
      for (i = 0; i < names[name][length]; i++) {
        names[name][i]['remove' + EventListener](
          scroll, names[name][i].syn, 0
        )
      }
    }
  }

  // setting-up the new listeners
  for (i = 0; i < elems[length];) {
    found = j = 0
    el = elems[i++]
    if (!(name = el.getAttribute('name'))) {
      // name attribute is not set
      continue
    }

    el = el[scroll + 'er'] || el // needed for intence

    // searching for existing entry in array of names;
    // searching for the element in that entry
    for (; j < (names[name] = names[name] || [])[length];) {
      found |= names[name][j++] === el
    }

    if (!found) {
      names[name].push(el)
    }

    el.eX = el.eY = 0;

    (function (el, name) {
      el[addEventListener](
        scroll,
        el.syn = function () {
          const elems = names[name]

          let scrollX = el[scroll + Left]
          let scrollY = el[scroll + Top]

          let xRate = Math.ceil(scrollX) / (el[scroll + Width] - el[client + Width])
          let yRate = scrollY / (el[scroll + Height] - el[client + Height])

          let updateX = Math.ceil(scrollX) !== el.eX
          let updateY = scrollY !== el.eY

          let otherEl
          let i = 0

          el.eX = Math.ceil(scrollX)
          el.eY = scrollY

          for (; i < elems[length];) {
            otherEl = elems[i++]
            if (otherEl !== el) {
              if (updateX && Math.round(otherEl[scroll + Left] - (scrollX = otherEl.eX = Math.round(xRate * (otherEl[scroll + Width] - otherEl[client + Width]))))) {
                otherEl[scroll + Left] = Math.ceil(scrollX)
              }

              if (updateY && Math.round(otherEl[scroll + Top] - (scrollY = otherEl.eY = Math.round(yRate * (otherEl[scroll + Height] - otherEl[client + Height]))))) {
                otherEl[scroll + Top] = scrollY
              }
            }
          }
        }, 0
      )
    })(el, name)
  }
}

module.exports = syncscroll
