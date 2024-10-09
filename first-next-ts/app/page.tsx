import Button from "./components/Button";

export default function Home() {
  return (
    <div className="relative mx-16 w-full py-5">
        <h1 className="font-bold text-3xl text-indigo-900">Personal info</h1>
        <p className="text-slate-400 text-sm">Please provide your name, email address and phone number</p>
        
        <form className="flex flex-col gap-5 mt-8">

          <div className="flex flex-col">
            <label htmlFor="nameInput" className="text-blue-900 text-sm font-bold">Name</label>
            <input className="mt-2 p-3 border rounded-md outline-none focus:border-indigo-700" type="text" name="nameInput" id="nameInput" />
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="mailInput" className="text-blue-900 text-sm font-bold">Email Address</label>
            <input className="mt-2 p-3 border rounded-md outline-none focus:border-indigo-700" type="text" name="mailInput" id="mailInput" />
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="numberInput" className="text-blue-900 text-sm font-bold">Phone Number</label>
            <input className="mt-2 p-3 border rounded-md outline-none focus:border-indigo-700" type="text" name="numberInput" id="numberInput" />
          </div>

          <div className="absolute right-0 bottom-5">
          <Button>
            Next Step
          </Button>
          </div>

        </form>
    </div>
  );
}
