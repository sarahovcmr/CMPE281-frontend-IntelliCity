import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

export default function PageLayout({ children }) {
  return (
    <div className="bg-slate-100">
      <div className="relative w-full top-0">
        <Topbar />
      </div>
      <div className="flex left-0">
        <Sidebar />
        <main className="m-[1rem]">{children}</main>
      </div>
    </div>
  );
}