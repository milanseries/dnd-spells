import React from 'react'
import LoadingSpinner from '../components/common/loader/LoadingSpinner'
import SpellList from '../components/features/spell/SpellList'
import { useSpells } from '../hooks/useSpells'

const MyComponent = ({ data }: any) => {
  console.log('isrender', data)
  return <div> {data}</div>
}
const MemorizedComponent = React.memo(MyComponent)
const HomePage: React.FC = () => {
  const [changed, setChanged] = React.useState('John')
  const [iban, setIban] = React.useState('')
  const spellsQuery = useSpells()

  function onHandle() {
    setChanged('Miilan')
  }

  return (
    <>
      <button onClick={onHandle}>Update data</button>
      <MemorizedComponent data={changed} />
      <input type="text" onChange={(e) => setIban(e.target.value)} />
      <div>{iban}</div>
      {spellsQuery.isLoading && <LoadingSpinner />}
      {spellsQuery.isSuccess && <SpellList spells={spellsQuery.data} />}
    </>
  )
}

export default HomePage
