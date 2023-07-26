import { Chip } from '@bphxd/ds-core-react'
import { render, screen } from '@testing-library/react'

describe('ds-core-react', () => {
  it('Chip renders without issues', () => {
    const {asFragment} = render(<div>Test Chippo<Chip id="test" color="success" label="test-chip" onRemove={()=>{}}/></div>)
    expect(asFragment).toMatchSnapshot();
  })
})
