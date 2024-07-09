export default function Ani() {
  return (
    <>
      <div className="relative rounded-xl overflow-auto p-8">
        <div className="flex items-center justify-center">
          <span className="relative inline-flex">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-sky-500 bg-white dark:bg-slate-800 transition ease-in-out duration-150 cursor-not-allowed ring-1 ring-slate-900/10 dark:ring-slate-200/20"
              disabled=""
            >
              Transactions
            </button>
            <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
              <span className="animate-spin absolute inline-flex w-1 h-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500 peer-checked:font-semibold"></span>
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
