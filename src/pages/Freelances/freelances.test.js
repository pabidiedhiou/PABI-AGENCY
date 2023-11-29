import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { waitFor, screen } from '@testing-library/react'
import Freelances from './freelances'
import { ThemeProvider } from '../../utils/context/context'
import { render } from '../../utils/test/index.tes'
const freelancersMockedData = [
  {
    name: 'Harry Potter',
    job: 'Magicien frontend',
    picture: '',
  },
  {
    name: 'Hermione Granger',
    job: 'Magicienne fullstack',
    picture: '',
  },
]

const server = setupServer(
  //On précise ici l'url qu'il faudra "intercepter"
  rest.get('http://localhost:7000/post/Getfreelance', (req, res, ctx) => {
    // Là on va pouvoir passer les datas mockées dans ce qui est retourné en json
    return res(ctx.json({ freelancersList: freelancersMockedData }))
  }),
)
// Active la simulation d'API avant les tests depuis server
beforeAll(() => server.listen())
// Réinitialise tout ce qu'on aurait pu ajouter en termes de durée pour nos tests avant chaque test
afterEach(() => server.resetHandlers())
// Ferme la simulation d'API une fois que les tests sont finis
afterAll(() => server.close())

function Wrapper({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>
}

it('Should display freelancers names', async () => {
  render(<Freelances />, { wrapper: Wrapper })
  expect(screen.getByTestId('loader')).toBeTruthy()
  await waitFor(() => {
    expect(screen.getByText('Harry Potter')).toBeTruthy()
  })
})
