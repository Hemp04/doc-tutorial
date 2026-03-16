import Link  from "next/link";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center ">
      <Link className="text-blue-500 underline" href="/documents/123">Click Here </Link> TO GO TO DOCUMENTS PAGE
    </div>
  );
}
