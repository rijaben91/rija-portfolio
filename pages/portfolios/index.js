
import PortfolioCard from '@/components/portfolios/PortfolioCard'
import Link from 'next/link';
import withApollo from '@/hoc/withApollo';
import {
  useGetPortfolios,
  useUpdatePortfolio,
  useDeletePortfolio,
  useCreatePortfolio
 } from '@/apollo/actions';
import { getDataFromTree } from '@apollo/react-ssr';

 const Portfolios = () => {
  const { data } = useGetPortfolios();
  const [updatePortfolio] =  useUpdatePortfolio();
  const [deletePortfolio] = useDeletePortfolio();
  const[createPortfolio] = useCreatePortfolio();

  const portfolios = data && data.portfolios || [];

  return (
  <>
    <section className="section-title">
    <div className="px-2">
      <div className="pt-5 pb-4">
        <h1>Portfolios</h1>
      </div>
    </div>
    <button onClick={createPortfolio}
      className="btn btn-primary">Create Portfolio</button>
  </section>
  <section className="pb-5">
    <div className="row">
    {
      portfolios.map(portfolio =>
        <div key={portfolio._id} className="col-md-4">
          <Link
          href='/portfolios/[id]'
          as={'/portfolios/'+ portfolio._id }>
            <a className="card-link">
              <PortfolioCard portfolio={portfolio}/>
            </a>
          </Link>
          <button className="btn btn-warning"
            onClick={() => updatePortfolio({variables: {id: portfolio._id}})}>
              Update Portfolio
           </button>
           <button className="btn btn-danger"
            onClick={() => deletePortfolio({variables: {id: portfolio._id}})}>Delete Portfolio
           </button>
        </div>

        )
    }
    </div>
  </section>
  <a href="" className="btn btn-main bg-blue ttu">See More Portfolios</a>
  <section className="section-title">
    <div className="px-2">
      <div className="pt-5 pb-4">
        <h1>Ask Me</h1>
      </div>
    </div>
  </section>
  <section className="pb-5">
    <div className="list-group">
      <a href="#" className="list-group-item list-group-item-action flex-column align-items-start py-3 subtle-shadow no-border">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1 black">List group item heading</h5>
          <small>3 days ago</small>
        </div>
        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <div className="avatar-container my-2">
          <img src="https://via.placeholder.com/150" className="avatar-image mr-2"></img>
          <span className="avatar-title">Filip Jerga</span>
        </div>
      </a>
      <a href="#" className="list-group-item list-group-item-action flex-column align-items-start mt-3 py-3 subtle-shadow no-border">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1 black">List group item heading</h5>
          <small className="text-muted">3 days ago</small>
        </div>
        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <div className="avatar-container my-2">
          <img src="https://via.placeholder.com/150" className="avatar-image mr-2"></img>
          <span className="avatar-title">Filip Jerga</span>
        </div>
      </a>
      <a href="#" className="list-group-item list-group-item-action flex-column align-items-start mt-3 py-3 subtle-shadow no-border">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1 black">List group item heading</h5>
          <small className="text-muted">3 days ago</small>
        </div>
        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <div className="avatar-container my-2">
          <img src="https://via.placeholder.com/150" className="avatar-image mr-2"></img>
          <span className="avatar-title">Filip Jerga</span>
        </div>
      </a>
    </div>
  </section>
  </>
 )
}

// const fetchPortfolios = () => {
//   const query=
//   `query Portfolios {
//     portfolios {
//       _id,
//       title,
//       company,
//       companyWebsite,
//       description,
//       jobTitle,
//       startDate,
//       endDate
//     }
//   }`

//   return axios.post('http://localhost:3000/graphql', { query })
//     .then(({data: graph}) => graph.data)
//     .then(data => data.portfolios)
// }

export default withApollo(Portfolios, {getDataFromTree});
