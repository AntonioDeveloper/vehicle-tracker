import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <div className="flex flex-col w-full h-[150px] px-20 py-5">
      <h1 className="bg-[#001E2E] w-full h-[50px]">Antonio José Pina Júnior</h1>
      <div className="w-full h-[100px] flex justify-between">
        <div className="w-1/2 flex">
          <span className="w-1/5">Lista</span>
          <form className="w-4/5">
            <input className="mr-2" type="radio" id="rastreados" value="rastreados" />
            <label className="mr-4" htmlFor="rastreados">Rastreados</label>
            <input className="mr-2" type="radio" id="outros" value="outros" />
            <label htmlFor="outros">Outros</label>
          </form>
        </div>
        <SearchBar />
      </div>
    </div>
  )
}