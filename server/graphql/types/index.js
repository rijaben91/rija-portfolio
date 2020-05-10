

const portFolioFIeld = `
  title: String
  companyWebsite: String
  location: String
  company: String
  jobTitle: String
  description: String
  startDate: String
  endDate: String
`

exports.portfolioTypes = `
type Portfolio {
  _id: ID!,
  ${portFolioFIeld}
}

input PortfolioInput {
  ${portFolioFIeld}
}

`
