
import { gql } from 'apollo-boost';




export const GET_PORTFOLIO = gql`
query Portfolio($id: ID) {
    portfolio(id: $id) {
      _id,
      title,
      company,
      companyWebsite,
      description,
      jobTitle,
      startDate,
      endDate
    }
  }`


export const GET_PORTFOLIOS = gql`
query Portfolios {
    portfolios {
      _id,
      title,
      company,
      companyWebsite,
      description,
      jobTitle,
      startDate,
      endDate
    }
  }`

export const CREATE_PORTFOLIO = gql`
mutation CreatePortfolio {
    createPortfolio(input: {
        title: "New JOb"
        company: "New Company RAKOTO"
        companyWebsite: "www.google.com"
        location: "Spain, Barcelona"
        jobTitle: "Engineer"
        description: "NEW DESCRIPTION"
        startDate: "01/01/2014"
        endDate: "01/01/2016"
    }) {
      _id,
      title,
      company,
      companyWebsite,
      description,
      jobTitle,
      startDate,
      endDate
    }
  }`

export const UPDATE_PORTFOLIO = gql`
mutation UpdatePortfolio($id: ID) {
    updatePortfolio(id: $id, input: {
        title: "UPDATED TITLE"
        company: "NEW COMPANY"
    }) {
      _id,
      title,
      company,
      companyWebsite,
      description,
      jobTitle,
      startDate,
      endDate
    }
  }`;

export const DELETE_PORTFOLIO = gql`
mutation DeletePortfolio($id: ID) {
  deletePortfolio(id: $id)
}`
