import Link from "next/link";

export default function Sidebar() {
  return (
    <aside style={{ width: "200px", background: "#f5f5f5", padding: "1rem" }}>
      <ul>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/documents">Documents</Link></li>
        <li><Link href="/candidats">Candidats</Link></li>
      </ul>
    </aside>
  );
}

