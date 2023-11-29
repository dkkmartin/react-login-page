import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <div className="w-[300px] bg-zinc-900 rounded-md p-10">
        <label htmlFor="">
          Email
          <Input type="email" placeholder="Email"></Input>
        </label>
        <label htmlFor="">
          Password
          <Input type="password" placeholder="Password"></Input>
        </label>

        <Button className="w-full mt-4 border border-opacity-0">Login</Button>
      </div>
    </main>
  );
}
