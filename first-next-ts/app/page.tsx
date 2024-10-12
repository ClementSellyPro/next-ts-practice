import Link from "next/link";
import Button from "./components/Button";
import Title from "./components/Title";

export default function Home() {
  return (
    <div className="relative mx-16 w-full py-5">
      <Title title={'Personal info'}>
        Please provide your name, email address and phone number
      </Title>
      
      <form className="flex flex-col gap-5 mt-8">

        <div className="flex flex-col">
          <label htmlFor="nameInput" className="text-blue-900 text-sm font-bold">Name</label>
          <input className="mt-2 p-3 border rounded-md outline-none focus:border-indigo-700" type="text" name="nameInput" id="nameInput" placeholder='e.g. Stephen King' />
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="mailInput" className="text-blue-900 text-sm font-bold">Email Address</label>
          <input className="mt-2 p-3 border rounded-md outline-none focus:border-indigo-700" type="text" name="mailInput" id="mailInput" placeholder='e.g. stephenking@lorem.com' />
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="numberInput" className="text-blue-900 text-sm font-bold">Phone Number</label>
          <input className="mt-2 p-3 border rounded-md outline-none focus:border-indigo-700" type="text" name="numberInput" id="numberInput" placeholder='e.g. +1 234 567 890' />
        </div>

        {/* button section */}
        <Link href='/plan' className="absolute right-0 bottom-5">
        <Button>
          Next Step
        </Button>
        </Link>

      </form>
    </div>
  );
}
