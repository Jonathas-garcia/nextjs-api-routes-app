import useSWR from 'swr'
import HoraAtual from '../../components/HoraAtual'
import TabelaCompleta from '../../components/TabelaCompleta'
import Link from 'next/link'
import ModalSair from '../../components/ModalSair'

const fetcher = (url) => fetch(url).then((res) => res.json())


export default function ListPeople() {
  const { data, error } = useSWR('/api/people', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <TabelaCompleta people={data} />
      <HoraAtual />
      <ModalSair />
    </div>
  )
}