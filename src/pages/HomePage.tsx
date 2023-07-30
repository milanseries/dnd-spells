import LoadingSpinner from '../components/common/loader/LoadingSpinner'
import SpellList from '../components/features/spell/SpellList'
import { useSpells } from '../hooks/useSpells'

const HomePage: React.FC = () => {
  const spellsQuery = useSpells()
  return (
    <>
      {spellsQuery.isError && <div> Error...</div>}
      {spellsQuery.isLoading && <LoadingSpinner />}
      {spellsQuery.isSuccess && <SpellList spells={spellsQuery.data} />}
    </>
  )
}

export default HomePage
