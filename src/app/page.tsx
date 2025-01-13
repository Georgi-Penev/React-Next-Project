import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>
        Deserunt occaecat culpa ullamco adipisicing deserunt nisi. Amet nostrud
        consectetur magna sint. Magna cupidatat consectetur dolore duis
        excepteur ad ut cupidatat anim.
      </p>

      <div className="flex justify-center my-8 ">
        <Link href="/tickets">
          <button className="btn-primary mx-2">View Tickets</button>
        </Link>
        <Link href="/tickets/create">
          <button className="btn-primary mx-2">Create Ticket</button>
        </Link>
      </div>

      <h2>Company Updates</h2>

      <div className="card">
        <h3>New member of the web dev team...</h3>
        <p>Commodo occaecat et sunt veniam amet ea qui deserunt.</p>
      </div>
      <div className="card">
        <h3>New website live!</h3>
        <p>Laboris non in do sunt ad ipsum nisi.</p>
      </div>
    </main>
  );
}
