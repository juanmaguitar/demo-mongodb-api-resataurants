const filtersApi = (req, res, next) => {
  const { show, hide, limit=20, page=1 } = req.query

  let selection = []

  if (show) selection = show.split(',')
  if (hide) selection = [...selection, ...hide.split(',').map(field => `-${field}`) ]

  req.selection = selection.join(' ')
  req.limit = +limit
  req.skip = limit*(page-1)

  next()
}

module.exports = filtersApi

