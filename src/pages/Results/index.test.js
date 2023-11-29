import { formatFetchParams, formatJobList } from './Results'
describe('La fonction formatJobList', () => {
  it('Should add une virgule àun item', () => {
    const expectedState = 'item2,'
    expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
  })
  it('Should not add de virgule pour le dernier élément', () => {
    const expectedState = 'item3'
    expect(formatJobList('item3', 3, 2)).toEqual(expectedState)
  })
})

describe('La fonction formatFetchParams', () => {
  it('should use the right format for param', () => {
    const expectedState = 'a1=answer1'
    expect(formatFetchParams({ 1: 'answer1' })).toEqual(expectedState)
  })
  it('should concatenate params with an &', () => {
    const expectedState = 'a1=answer1&a2=answer2'
    expect(formatFetchParams({ 1: 'answer1', 2: 'answer2' })).toEqual(
      expectedState,
    )
  })
})
