import React from 'react'
import { useParams } from 'react-router-dom'
import useSpell from '../hooks/useSpell'
import SpellDetail from '../components/features/spell/SpellDetail'
import LoadingSpinner from '../components/common/loader/LoadingSpinner'

const SpellDetailPage: React.FC = () => {
  const { index } = useParams()
  const spellQuery = useSpell(index as string)

  return (
    <>
      {spellQuery.isLoading && <LoadingSpinner />}
      {spellQuery.isSuccess && <SpellDetail spell={spellQuery.data} />}
    </>
  )
}

export default SpellDetailPage
