export const Header = ({client}) => {
  return (
    <div className="flex justify-between items-center w-full h-full py-4 bg-zinc-50 gap-4">
        <span className="font-serif text-zinc-800 text-2xl font-bold">{client.nome}</span>
    </div>
  )
}
