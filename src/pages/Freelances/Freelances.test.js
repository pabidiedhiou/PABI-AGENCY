import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen, waitFor } from '@testing-library/react'

import Freelances from './Freelances'
import { MonProviderDeTheme } from '../../Utils/Context/Context'

const freelancersMockedData = [
  {
    name: 'Pabi Diédhiou',
    job: 'Magicien frontend',
    picture: '',
  },
  {
    name: 'Awa Diouf',
    job: 'Magicienne fullstack',
    picture: '',
  },
]
const server = setupServer(
  // On précise ici l'url qu'il faudra "intercepter"
  rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
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
  return <MonProviderDeTheme>{children}</MonProviderDeTheme>
}

it('Should render without crashing', async () => {
  render(<Freelances />, { wrapper: Wrapper })
  expect(screen.getByTestId('loader')).toBeTruthy()
  await waitFor(() => {
    expect(screen.getByText('Pabi Diédhiou')).toBeTruthy()
  })
})
